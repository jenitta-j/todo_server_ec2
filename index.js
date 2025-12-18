import dotenv from "dotenv";
dotenv.config();   // 👈 must be at top

import connectDB from "./Db/db.js";

connectDB();
