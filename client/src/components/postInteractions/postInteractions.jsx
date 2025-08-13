
import './postInteractions.css';
import Image from '../image/image';
const PostInteractions = () => {
    return (
      <div className='postInteractions'>
        <div className="interactionsIcons">
            <Image path='/general/react.svg'/>
            205
            <Image path='/general/share.svg'/>
            <Image path='/general/more.svg'/>
        </div>
        <button>Save</button>
      </div>
    )
}

export default PostInteractions;