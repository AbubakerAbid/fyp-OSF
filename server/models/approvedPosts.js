import mongoose from 'mongoose';

const ApprovedWorkerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    cnic: Number,
    work: String,
    contact: Number,
    salary: String,
    description: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const ApprovedWorker = mongoose.model('ApprovedWorker', ApprovedWorkerSchema);
export default ApprovedWorker;
