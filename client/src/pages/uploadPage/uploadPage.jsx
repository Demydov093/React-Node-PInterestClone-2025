
import './uploadPage.css';

import Image from '../../components/image/image';

const UploadPage = () => {
    return (
      <div className='uploadPage'>
       <div className="uploadTop">
        <h1>Upload image</h1>
        <button>Publish</button>
       </div>
       <div className="uploadBottom">
          <div className="uploadFile">
            <div className="uploadTitle">
              <Image path="/general/upload.svg" alt="upload"/>
              <span>Choose a file</span>
            </div>
            <div className="uploadInfo">
              Upload the high quality .jpg
            </div>
          </div>
          <form action="" className='uploadForm'>
            <div className="uploadFormItem">
              <label htmlFor='title'>Title</label>
              <input type="text" name="title" id="title" placeholder='Add a title' />
            </div>
            <div className="uploadFormItem">
              <label htmlFor='description'>Description</label>
              <textarea rows={6} type="text" name="description" id="description" placeholder='Add a dscription' />
            </div>
            <div className="uploadFormItem">
              <label htmlFor='link'>Link</label>
              <input type="text" name="link" id="link" placeholder='Add a link' />
            </div>
            <div className="uploadFormItem">
              <label htmlFor='board'>Board</label>
              <select name="board" id="board">
                <option>Choose a board</option>
                <option value="1">Board 1</option>
                <option value="2">Board 2</option>
                <option value="3">Board 3</option>
              </select>
            </div>
            <div className="uploadFormItem">
              <label htmlFor='tags'>Tagged topics</label>
              <input type="text" name="tags" id="tags" placeholder='Add tags' />
              <small>Don't worry, people won't see it</small>
            </div>
          </form>
       </div>
      </div>
    )
}

export default UploadPage;