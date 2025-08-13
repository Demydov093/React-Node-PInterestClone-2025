
import './comments.css';
import Image from '../image/image';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

const Comments = () => {

  const [open, setOpen] = useState(false);

    return (
      <div className='comments'>
       <div className="commentsList">
          <span className='commentsCount'>5 comments</span>
          {/* COMMENT */}
          <div className="comment">
            <Image path='/general/noAvatar.png' alt='userAvatar'/>
            <div className="commentContent">
              <span className="commentUsername">John Smith</span>
              <p className='commentText'>This is the first comment ever</p>
              <span className="commenttime">2h ago</span>
            </div>
          </div>
          <div className="comment">
            <Image path='/general/noAvatar.png' alt='userAvatar'/>
            <div className="commentContent">
              <span className="commentUsername">John Smith</span>
              <p className='commentText'>This is the first comment ever</p>
              <span className="commenttime">2h ago</span>
            </div>
          </div>
          <div className="comment">
            <Image path='/general/noAvatar.png' alt='userAvatar'/>
            <div className="commentContent">
              <span className="commentUsername">John Smith</span>
              <p className='commentText'>This is the first comment ever</p>
              <span className="commenttime">2h ago</span>
            </div>
          </div>
          <div className="comment">
            <Image path='/general/noAvatar.png' alt='userAvatar'/>
            <div className="commentContent">
              <span className="commentUsername">John Smith</span>
              <p className='commentText'>This is the first comment ever</p>
              <span className="commenttime">2h ago</span>
            </div>
          </div>
          <div className="comment">
            <Image path='/general/noAvatar.png' alt='userAvatar'/>
            <div className="commentContent">
              <span className="commentUsername">John Smith</span>
              <p className='commentText'>This is the first comment ever</p>
              <span className="commenttime">2h ago</span>
            </div>
          </div>
        </div>
        {/* FORM */}
        <form className="commentForm">
          <input type="text" placeholder='Add a comment'/>
          <div className="emoji">
            <div onClick={() => setOpen((prev)=>!prev)}>😊</div>
            {open && <div className="emojiPicker">
              <EmojiPicker/>
            </div>}
          </div>
        </form>
       
      </div>
    )
}

export default Comments;