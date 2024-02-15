import React from 'react'
import Image from 'next/image';
import tmax from '../../../public/tmax.png'; 

const Images = () => {
  return (
    <figure>
        <figcaption>tmax image</figcaption>
        {/* static 한 경로 설정 */}
        <figcaption>static 한 경로 설정</figcaption>
        <Image 
            src={tmax} 
            alt="tmax-logo" 
            placeholder="blur"
        />
        {/* 외부 경로로 설정*/}
        {/* <figcaption>외부 경로로 설정</figcaption>
        <Image
            src="/tmax.png"
            alt="tmax-logo"
            // fill
            // style={{objectFit:'cover'}}
            width={50}
            height={50}
        /> */}
    </figure>
  )
}

export default Images
