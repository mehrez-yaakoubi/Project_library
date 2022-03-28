const express=require('express');
const comment=require('../modules/comment');
const book=require('../modules/book');
const user= require('../modules/users');
const router = express.Router();


router.post("/addComment",async(req,res,next)=>{
    try{
        const comment_text = req.body.comment;
        const user_id = req.user._id;
        const username = req.user.username;
        // fetching the book to be commented by id
        const book_id = req.params.book_id;
        const book = await book.findById(book_id);

        // creating new comment instance
        const comment = new Comment({
            text: comment_text,
            author: {
                id: user_id,
                username: username,
            },
            book: {
                id: book._id,
                title: book.title,
            }
        });
        await comment.save();
        
        // pushing the comment id to book
        book.comments.push(comment._id);
        await book.save();

    }catch(err){console.log("error")};

});
router.put("/updateComent",async(req,res,next)=>{
    const comment_id = req.params.comment_id;
    const comment_text = req.body.comment;
    const book_id = req.params.book_id;
    const username = req.user.username;
    const user_id = req.user._id;
    try {
        // fetching the comment by id
        await Comment.findByIdAndUpdate(comment_id, comment_text);
        
        // fetching the book
        const book = await book.findById(book_id);

    }catch(err){console.log("error")};
});
router.delete("/deleteComment",async(req,res,next)=>{
    const book_id = req.params.book_id;
    const comment_id = req.params.comment_id;
    const user_id = req.user._id;
    const username = req.user.username;
    try{
        // fetching the book
    const book = await Book.findById(book_id);

    // finding the position and popping comment_id
    const pos = book.comments.indexOf(comment_id);
    book.comments.splice(pos, 1);
    await book.save();

    // removing comment from Comment
    await Comment.findByIdAndRemove(comment_id);
    }catch(err){console.log("error in delaiting comment")};
});
module.exports=router;