import React, { useEffect, useState } from 'react'

const Level = ({color, maxLevel, value}) => {
    const [percentage, setPercentage] = useState(0)
    const [applyColor, setApplyColor] = useState("")
    useEffect(() => {
        let val = Math.floor((value/maxLevel)*100)
        setPercentage(val)
        setApplyColor(color)
    }, [maxLevel, value, color])
    
  return (
    <div className=' rounded-full bg-black h-4 flex m-2'>
        <div className={applyColor === "pink"?'h-full bg-pink rounded-full':applyColor === "yellow"?'h-full bg-yellow rounded-full':'h-full bg-blue rounded-full'}style={{width:`${percentage}%`}}></div>
        <span className={applyColor ==="pink"?`text-pink text-xs`:applyColor === "yellow"?`text-yellow text-xs`:`text-blue text-xs`}>{value}g</span>
    </div>
  )
}

export default Level