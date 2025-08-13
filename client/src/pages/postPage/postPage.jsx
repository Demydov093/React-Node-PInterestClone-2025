
import Comments from '../../components/comments/comments';
import PostInteractions from '../../components/postInteractions/postInteractions';
import './postPage.css';

import Image from '../../components/image/image';

import {Link} from 'react-router';

const PostPage = () => {
    return (
      <div className='postPage'>
       <div className="postContainer">
        <div className="postImage">
          <Image path="/pins/pin1.jpeg" alt ="" width={736} />
        </div>
        <div className="postDetails">
          <PostInteractions/>
          <Link to="john" className='postUser'>
            <Image path='/general/noAvatar.png'/>
            <span>John Smith</span>
          </Link>
          <Comments></Comments>
        </div>
       </div>
      </div>
    )
}

export default PostPage;