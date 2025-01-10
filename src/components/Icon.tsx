import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { ReactNode } from 'react'

type Props = {
  height: number,
  width: number,
  background: string,
  imgSrc: string | StaticImport,
  alt: string,
  additionalStyles?: string
}

const Icon = ({additionalStyles,height,width,background, imgSrc, alt}: Props) => {
  return (
    <div className={`${background} ${additionalStyles}`}>
      <Image height={height} width={width} src={imgSrc} alt={alt}/>
    </div>
  )
}

export default Icon