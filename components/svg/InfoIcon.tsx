
type Props = {
  color?: string
  size?: number
  className?: string
}

const InfoIcon = (props: Props) => {
  const { color = '#2196F3', size = 100, className="" } = props

  return (
    <svg width={`${size.toString()}`} height={`${size.toString()}`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path 
        d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" 
        fill={`${color}`} 
      />
      <path 
        d="M469.333333 469.333333h85.333334v234.666667h-85.333334z" 
        fill="#FFFFFF" 
      />
      <path 
        d="M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z" 
        fill="#FFFFFF" 
      />
    </svg>
  )
}

export default InfoIcon