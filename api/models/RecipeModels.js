const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const RecipeModel = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    comments: [
        {
            comment: {
                type: String,
                required: true,
                trim: true
            }
        }
    ],

})

const Recipe = mongoose.model("Recipe", RecipeModel);
module.exports = Recipe;