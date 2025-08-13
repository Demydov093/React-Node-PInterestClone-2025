import './leftBar.css';
import Image from '../image/image';
import { Link } from 'react-router';

const LeftBar = () => {
    return (
      <div className='leftBar'>
        <div className="menuIcons">
            <Link to="/" className='menuIcon'>
                <Image path="/general/logo.png" alt="logo" className='logo'/>
            </Link>
            <Link to="/" className='menuIcon'>
                <Image path="/general/home.svg" alt="home" />
            </Link>
            <Link to="/upload" className='menuIcon'>
                <Image path="/general/create.svg" alt="create" />
            </Link>
            <Link to="/" className='menuIcon'>
                <Image path="/general/updates.svg" alt="updates" />
            </Link>
            <Link to="/" className='menuIcon'>
                <Image path="/general/messages.svg" alt="messages" />
            </Link>
        </div>
        <Link to="/" className='menuIcon'>
            <Image path="/general/settings.svg" alt="settings" />
        </Link>
      </div>
    )
}

export default LeftBar;