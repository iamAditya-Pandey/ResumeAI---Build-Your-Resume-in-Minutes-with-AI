/*
 * @project ResumeAI
 * @file User.js
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true },
}, {timestamps: true })

UserSchema.methods.comparePassword = function (password){
    return bcrypt.compareSync(password, this.password)
}


const User = mongoose.model("User", UserSchema)

export default User;