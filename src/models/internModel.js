const mongoose = require('mongoose')

const internSchema = new mongoose.Schema({
    name: { type: String, required: 'First name is mandatory', trim: true, },
    email: {
        type: String, trim: true, lowercase: true, unique: true,
        required: 'Email address is required',       
    },
    mobile: {
        type: Number, required: 'phone number is required', unique: true,        
    },
    isDeleted: { type: Boolean, default: false },
    collegeId: {
        required: 'collegeId  is required',
        type: mongoose.Types.ObjectId
    },
}, { timestamps: true })

module.exports = mongoose.model('Intern', internSchema)