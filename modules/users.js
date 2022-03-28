const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  isAdmin: { type: Boolean, default: false }
});

module.exports= mongoose.models.user|| mongoose.model('user', UserSchema);