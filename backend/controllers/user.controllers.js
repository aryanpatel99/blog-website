const { userModel } = require("../models/userModel");

const getUserSavedPosts = async (req,res) => {
    const clerrkId = req.auth().userId;

    if(!clerrkId){
        return res.status(401).json({message:"Not Authenticated"})
    }
    
    const user = await userModel  .findOne({
        clerkId: clerrkId
    })

    res.status(200).json(user.savedPosts)
}

const savePost = async (req,res) => {
    const clerrkId = req.auth().userId;
    const {postId} = req.body

    if(!clerrkId){
        return res.status(401).json({message:"Not Authenticated"})
    }
    
    const user = await userModel  .findOne({
        clerkId: clerrkId
    })

    const isSaved = user.savedPosts.some(id => id === postId)

    if(!isSaved){
        await userModel.findByIdAndUpdate(user._id,{
            $push:{savedPosts:postId}
        })
    }else{
        await userModel.findByIdAndUpdate(user._id,{
            $pull:{savedPosts:postId}
        })
    }

    res.status(200).json(isSaved ? "Post unsaved" : "Post saved")


}

module.exports = {
    getUserSavedPosts,
    savePost
}
