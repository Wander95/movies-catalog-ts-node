import { Schema,model,Document } from 'mongoose';

interface IPhoto extends Document {
    title:string;
    description:string;
    imagePath:string
}

const PhotoSchema = new Schema ({
    title:String,
    description:String,
    imagePath:String
})

export default model<IPhoto>('Photo',PhotoSchema);