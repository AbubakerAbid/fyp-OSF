import ApprovedWorker from "../models/approvedPosts.js";
export const getApprovedPosts = async (req, res) => {
    try{
        const ApprovedWorkers = await ApprovedWorker.find();
        res.status(200).json(ApprovedWorkers);

    }catch(err){
        res.status(404).json({message: err.message})
    }
};

export const createApprovedPosts = async (req, res) => {
    const post = req.body;
    const newPost = new ApprovedWorker(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(err){
        res.status(409).json({message: err.message})
    }
};