import mongoose, { Schema } from "mongoose";

const reqString = {
  type: String,
  required: true,
};

const welcomeSchema = new Schema({
  // I know you're confused if you're trying to build something with this, but it's simple:
  // It's the guild ID :)
  _id: reqString,
  channelId: reqString,
  text: reqString,
});

const name = "welcome";
export default mongoose.models[name] ||
  mongoose.model(name, welcomeSchema, name);
