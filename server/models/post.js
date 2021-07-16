const mongoose = require("mongoose");
const schema = mongoose.Schema;
const PostSchema = new schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  status: {
    type: String,
    enum: ["To Learn", "Learning", "Learned"],
  },
  user: {
    type: schema.Types.ObjectId,
    ref: "users",
  },
});
module.exports = mongoose.model("post", PostSchema);
