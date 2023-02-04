// import { MongoClient } from "mongodb";
// import { mongoose_key } from "./firebaseConfig";
import mongoose from "mongoose";
const mongoose_key =
  "mongodb+srv://stealthspectre:FsnROGuq19Kt2281@cluster0.yjkkasb.mongodb.net/?retryWrites=true&w=majority";

export function mongom() {
  mongoose.connect(mongoose_key).catch((err) => console.error(err));
  const itemSchema = new mongoose.Schema({
    name: String,
    uid: String,
    email: String,
    phone: String,
    password: String,
  });
  const Item1 = mongoose.model("test-Item-2", itemSchema);
  return Item1;
}

// export function mongo() {
//   let client;
//   let clientPromise;
//   const uri = mongoose_key;
//   const options = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   };
//   client = new MongoClient(uri);
//   global._mongoClientPromise = client.connect();
// }

const itemSchema = new mongoose.Schema({
  name: String,
  uid: String,
  email: String,
  phone: String,
  password: String,
});
const Item = mongoose.model("Item", itemSchema);
Item.create({
  name: "name",
  uid: "uid",
  email: "email",
  phone: "phone",
  password: "password",
})
  .then(() => console.log("Item saved to MongoDB Atlas..."))
  .catch((err) => console.error(err));
