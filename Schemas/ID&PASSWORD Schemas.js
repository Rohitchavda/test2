const mongoose = require("mongoose");

const idpassSchemas = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const ID = mongoose.model("id&pass", idpassSchemas);

module.exports = ID;
