type RDVIconProps = {
  width?: string | number
  height?: string | number
}

const RDVIcon = (props: RDVIconProps) => {
  const { width = "24", height = "24" } = props

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      width={width} 
      height={height} 
      fill="none"
      stroke="currentColor" 
      strokeWidth="1.75"
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-label="Calendar with at sign" 
      role="img"
    >

      <defs>
        <mask id="calAtCut" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="24" height="24" fill="#fff"/>
          <circle cx="18.5" cy="18.5" r="5.1" fill="#000"/>
        </mask>

        <clipPath id="badgeClip">
          <circle cx="18.5" cy="18.5" r="3.55"/>
        </clipPath>
      </defs>

      <g mask="url(#calAtCut)">
        <rect x="3" y="5" width="18" height="16" rx="2"/>
        <path d="M8 3v4M16 3v4"/>
        <path d="M3 9h18"/>
      </g>

      <circle cx="18.5" cy="18.5" r="4.6"/>

      <g clipPath="url(#badgeClip)">
        <path 
          fill="currentColor" 
          stroke="none"
          d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"
          transform="translate(18.5 18.5) scale(0.0142) translate(-256 -256)"
        />
      </g>
    </svg>
  )
}

export default RDVIcon