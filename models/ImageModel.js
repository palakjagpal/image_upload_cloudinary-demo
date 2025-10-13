import mongoose from "mongoose"

const ImageSchema = new mongoose.Schema({
    url : { type : String, required : true},
    public_id : {type : String, required : true},
    createdAt : {type : Date, default : Date.now}
})

const ImageModel = mongoose.model("ImageModel", ImageSchema)

export default ImageModel