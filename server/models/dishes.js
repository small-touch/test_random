import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: '',
    },
    id: {
        type: String,
        required: false,
        default: '',
    },
    _id: {
        type: String,
        required: false,
        default: '',
    }
});

export default mongoose.model('dish', dishSchema, 'dish');