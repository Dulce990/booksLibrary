import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    code: String,
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: Number
});


export default model('Recipe', recipeSchema);
