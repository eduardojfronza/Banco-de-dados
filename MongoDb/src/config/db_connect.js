import mongoose from "mongoose";

mongoose.connect("mongodb+srv://edujfronza:12345@cluster0.s0nfdhs.mongodb.net/livros?");

let db = mongoose.connection;

export default db;