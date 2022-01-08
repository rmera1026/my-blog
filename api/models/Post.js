const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },{timestamps: true}
  // {
  //   createdAt: {
  //     type: Date,
  //     default: Date.now
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now
  // }}
  // { writeConcern:
  //   {
  //     w: 'majority',
  //     j: true,
  //     wtimeout: 1000
  //   }
// }
);

module.exports = mongoose.model("Post", PostSchema);