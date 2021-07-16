const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const verifytoken = require("../middleware/auth");
/**
 * get all posts
 */
router.get("/", verifytoken, async (req, res) => {
  var userId = req.userId;
  try {
    const post = await Post.find({ user: userId }).populate("user", [
      "username",
    ]);
    res.send(post);
  } catch (error) {
    console.log("user not found");
  }
});
router.post("/", verifytoken, async (req, res) => {
  const { title, description, url, status } = req.body;
  try {
    console.log(req.userId);
    const post = new Post({
      title,
      description,
      url,
      status,
      user: req.userId,
    });
    console.log(post);
    await post.save();
    return res
      .status(200)
      .json({ success: true, message: "Successfully post " });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: true, message: "Can not post " });
  }
});
/***
 * Update
 */
router.put("/:id", verifytoken, async (req, res) => {
  const { title, description, url, status } = req.body;
  const userId = req.userId;
  try {
    var postz = {
      title,
      description,
      url,
      status,
    };
    postz = await Post.findOneAndUpdate(
      {
        _id: req.params.id,
        user: userId,
      },
      postz,
      { new: true }
    );
    if (postz) {
      console.log(postz);
      return res.status(200).json({
        success: true,
        message: "Successfully update post(s) ",
        post: postz,
      });
    }

    return res
      .status(400)
      .json({ success: true, message: "Post not authorised" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: true, message: "Can not update post(s) " });
  }
});
/***
 * Delete
 */
router.delete("/:id", verifytoken, async (req, res) => {
  const userId = req.userId;
  try {
    const postz = await Post.findOneAndDelete({
      _id: req.params.id,
      user: userId,
    });
    if (postz)
      return res.status(200).json({
        success: true,
        message: "Successfully delete post(s) ",
        post: postz,
      });

    return res
      .status(400)
      .json({ success: true, message: "Post not authorised" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: true, message: "Can not delete post(s) " });
  }
});
module.exports = router;
