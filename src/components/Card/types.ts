import { StaticImageData } from 'next/image'

export interface CardProps {
  image: StaticImageData
  title?: string
  subtitle: string
  colorTheme: string
  prUrl: string | undefined
}
