import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  url: String,
},{
    timestamps: true,
});


const Images = mongoose.models.Images || mongoose.model('Images', imageSchema);

export default Images;

