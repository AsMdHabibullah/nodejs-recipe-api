const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    comment: {
        type: String,
        required: true,
        trim: true
    },
})

const CommentsModel = mongoose.model("CommentsModel", CommentsSchema);
module.exports = CommentsModel;