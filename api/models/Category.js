const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { writeConcern:
    {
      w: 'majority',
      j: true,
      wtimeout: 1000
    }
});

module.exports = mongoose.model("Category", CategorySchema);