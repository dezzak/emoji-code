import React from 'react'

const Heart = (x = 0, y = 0, colour = '#f46767') => (
  <svg x={x} y={y}>
    <path
      d="M21.8 2.8c-.9-1.8-2.7-3-5-2.8s-4.1 1.4-5.6 3.5C9.7 1.5 7.9.2 5.6.1 3.3 0 1.5 1.2.6 3c-.9 1.8-.9 4.2.9 7 1.8 2.7 9.5 8.2 9.7 8.4.2-.2 7.9-5.8 9.7-8.4 1.8-3 1.8-5.4.9-7.2"
      fill={colour}
    />
  </svg>
)

Heart.args = ['x', 'y', 'colour']

Heart.previewViewBox = '0 0 23 19'

export default Heart