import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../../../database/models/user.model.js";

export const signUp = async (req, res) => {
    const { name, email, password, role } = req.body;
    const isExist = await userModel.findOne({ email });
    if (isExist) {
        return res.status(400).json({ message: "User already exist" });
    }
    else {
        bcrypt.hash(password, 8, async function (err, hash) {
            if (err) {
                return res.status(400).json({ message: "Error in hashing" });
            }
            else {
                try {
                    await userModel.insertMany({ name, email, password: hash, role });
                    return res.status(201).json({ message: "User created successfully" });
                } catch (error) {
                    return res.status(500).json({ message: "Error in creating user" });
                }
            }
        });
    }
};
export const signIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
        // check password
        const isMatch = bcrypt.compare(password, user.password);
        if (isMatch) {
            // generate token   => info: name, userId, email => payload  
            const token = jwt.sign({ name: user.name, userId: user._id, email: user.email }, process.env.JWT_SECRET);
            return res.status(200).json({ message: "Login successfully", token });
        }
        else {
            return res.status(400).json({ message: "incorrect credentials" });

        }
    } else {
        return res.status(400).json({ message: "User not found" });
    }
};