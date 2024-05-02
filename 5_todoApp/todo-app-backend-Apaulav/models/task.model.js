const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema ({
    title: String,
    description: String,
    status: {
        type: String,
        required: true,
        default: "pendiente",
        enum: ["pendiente", "en_curso", "completado"]
    }, //TODO, IN_PROGRESS, DONE
    dueDate: Date,
    user: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Referencia al modelo User
    }
}, {timestamps:true})

const taskModel = mongoose.model('Task', taskSchema)

module.exports = taskModel