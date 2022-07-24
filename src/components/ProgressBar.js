import React, {useState, useEffect} from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const ProgressBar = ({ stepsWalked, stepsTargeted }) => {

    const [percentage, setPercentage] = useState(0)
    useEffect(() => {
      let val = Math.floor(stepsWalked/stepsTargeted*100)
      setPercentage(val)
    }, [stepsTargeted, stepsWalked])
    

  return (
    <div className="lg:h-32 lg:w-fit p-2 w-52 h-52 m-auto mb-4">
      <CircularProgressbarWithChildren
        value={percentage}
        className="lg:h-28 lg:w-28 w-52 h-52"
        styles={buildStyles({
            rotation:0.20,
          strokeLinecap: "round",
          textSize: "12px",
          pathTransitionDuration: 0.5,
          pathColor: `#7FD18C`,
          textColor: "#FFFFFF",
          trailColor: "#FFFFFF",
          backgroundColor: "#1E262F",
        })}
      >
        <div className="">
            <p className="text-center font-bold text-lg">{stepsWalked}</p>
            <p className="text-center font-light text-sm">Walked</p>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default ProgressBar;
