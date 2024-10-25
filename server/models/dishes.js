import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: '',
    }
});

export default mongoose.model('dish', dishSchema, 'dish');