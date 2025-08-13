
import './collections.css';

import Image from '../image/image';

const Collections = () => {
    return (
      <div className='collections'>
       {/* COLLECTION */}
       <div className="collection">
            <Image path="pins/pin1.jpeg" alt=""/>
            <div className="collectionInfo">
                <h1>My collection</h1>
                <span>12 elements - 2 months</span>
            </div>
       </div>
       {/* COLLECTION */}
       <div className="collection">
            <Image path="pins/pin1.jpeg" alt=""/>
            <div className="collectionInfo">
                <h1>My collection</h1>
                <span>12 elements - 2 months</span>
            </div>
       </div>
       {/* COLLECTION */}
       <div className="collection">
            <Image path="pins/pin1.jpeg" alt=""/>
            <div className="collectionInfo">
                <h1>My collection</h1>
                <span>12 elements - 2 months</span>
            </div>
       </div>
       {/* COLLECTION */}
       <div className="collection">
            <Image path="pins/pin1.jpeg" alt=""/>
            <div className="collectionInfo">
                <h1>My collection</h1>
                <span>12 elements - 2 months</span>
            </div>
       </div>
      </div>
    )
}

export default Collections;