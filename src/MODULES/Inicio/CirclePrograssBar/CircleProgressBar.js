import React from 'react'

import './circleProgressBar.css'

const CircleProgressBar = (circle) => {


  return (
    <div
      className={circle.divClassName}
      style={circle.divStyle ? circle.divStyle : null}
    >
      <svg
        id={circle.idSvg}
        data-percentage={circle.dataPercentage}
        className="radial-progress"
        viewBox="0 0 80 80"
      >
        <circle className="incomplete" cx="40" cy="40" r="35"></circle>
        <circle className="complete" cx="40" cy="40" r="35" style={circle.circleComplete}></circle>
        <text
          className="percentage"
          x="50%"
          y={circle.textPercentageY}
          transform="matrix(0, 1, -1, 0, 80, 0)"
          style={{ fontSize: '14px' }}
        >50%</text>
      </svg>
      <p className={circle.pClassName}>
        Progreso de Rango Actual
      </p>
    </div>
  )
}

export default CircleProgressBar
