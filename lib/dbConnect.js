require("dotenv").config();

import mongoose from "mongoose";

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  // const mongoUrl = NODE === "dev" ? MONGODB_URI : MONGODB_URI_PORDUCTION;
  const mongoUrl = "<url_mongo>";
  console.log({ mongoUrl });
  return mongoose.connect(mongoUrl);
}

export default dbConnect;
