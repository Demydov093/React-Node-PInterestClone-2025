import express from 'express';
import userRouter from './routes/user.route.js';
import boardRouter from './routes/board.route.js';
import commentRouter from './routes/comment.route.js';
import postRouter from './routes/post.route.js';
import connectDB from './utils/connectDB.js';

const app = express();

app.use("/users", userRouter)
app.use("/board", boardRouter)
app.use("/comment", commentRouter)
app.use("/post", postRouter)

app.listen(3000, () => {
    connectDB();
    console.log("Server is running!");
});