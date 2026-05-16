import Image from 'next/image'

type LogoProps = {
  size?: number
  className?: string
}

export default function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Royal Decorzz logo"
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
    />
  )
}
