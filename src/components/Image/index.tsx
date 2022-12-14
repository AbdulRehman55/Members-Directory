import React from 'react'

interface ImageProps {
    src?: string
    alt?: string
    width?: string
    height?: string
    margin?: string
}

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width = '25px',
    height = '25px',
    margin = '0 10px',
}): JSX.Element => {
    return <img src={src} style={{ margin, width, height }} alt={alt} />
}

export default Image
