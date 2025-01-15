const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    condition: {    
        type: String,
        required: true,
    },
    activity: {
        type: [String],
        required: true,
    },
}, { timestamps: true });   

module.exports = mongoose.model('Activity', activitySchema);