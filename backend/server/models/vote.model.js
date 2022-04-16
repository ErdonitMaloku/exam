const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const VoteSchema = mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question is required"],
        minLength: [10, "Question must be 10 character or longer"]
    }, 
    optionOne: {
        type: String, 
        required: [true, "Option 1 is required"] 
    }, 
    optionOneSupports: {
        type: Number,
        default: 0
    },
    optionTwo: {
        type: String, 
        required: [true, "Option 2 is required"] 
    },
    optionTwoSupports: {
        type: Number,
        default: 0
    },
    optionThree: {
        type: String
    }, 
    optionThreeSupports: {
        type: Number,
        default: 0
    },
    optionFour: {
        type: String
    }, 
    optionFourSupports: {
        type: Number,
        default: 0
    },
    totalVoteCount: {
        type: Number,
        default: 0
    }
}, 
{timestamps: true});


const Vote = mongoose.model("Vote", VoteSchema);
module.exports = Vote;