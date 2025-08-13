
import './profilePage.css';

import Image from '../../components/image/image';
import Gallery from '../../components/gallery/gallery';
import Collections from '../../components/collections/collections';
import { useState } from 'react';

const ProfilePage = () => {

  const [option, setOption] = useState("saved");

    return (
      <div className='profilePage'>
       <Image className='profileImage' path='/general/noAvatar.png' alt=""/>
        <h1 className='profileName'>John Smith</h1>
        <span className='profileUsername'>@johnsmith</span>
        <div className='followCounts'>10 followers - 20 followings</div>
        <div className='profileInteractios'>
          <Image path='/general/share.svg' alt=''/>
          <div className="profileButtons">
            <button>Message</button>
            <button>Follow</button>
          </div>
          <Image path='/general/more.svg' alt=''/>
        </div>
        <div className="profileOptions">
           <span onClick={() => setOption("created")} className={option==="created" ? "active" : ""}>Created</span>
           <span onClick={() => setOption("saved")} className={option==="saved" ? "active" : ""} >Saved</span>
        </div>
        {option==='created' && <Gallery/>}
        {option==='saved' && <Collections/>}
      </div>
    )
}

export default ProfilePage;