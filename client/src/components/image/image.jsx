import { IKImage } from 'imagekitio-react';

const Image = ({path, alt, className, width, height}) => {
    return (
        <IKImage 
            urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
            path={path}
            transformation={[{
                height: height,
                width: width
            }]}
            alt={alt}
            loading='lazy'
            className={className}
            lqip={{active: true, quality: 20}}
        />
    )
}

export default Image;