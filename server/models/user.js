const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImageUrl: {
    type: String
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    }
  ]
});

userSchema.pre("save", async function(next) {
  try {
    //if password has not been changed, don't encrypt password again
    if (!this.isModified("password")) {
      return next();
    }

    let hashPassword = await bcrypt.hash(this.password, 10); //hash and sall password
    this.password = hashPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});

//compare password from db to make sure users entered the correct passwords
userSchema.methods.comparePassword = async function(candidatePassword, next) {
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (error) {
    return next(error);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
