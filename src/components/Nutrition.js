import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PieChart } from "react-minimal-pie-chart";
import { incrementCalories, decrementCalories } from "../Reducer/userProfile";
import chevron from "../svgs/chevron.svg"
import bell from "../svgs/bell.svg"
import NutritionSvg from "../svgs/nutrition.svg"
import Tooltip from "./Tooltip";
const Nutrition = ({ calories }) => {
  const dispatch = useDispatch();

  const [calTarget, setCalTarget] = useState(0);
  const [tooltipData, setTooltipData] = useState({})

  useEffect(() => {
    setCalTarget(calories.calorieTarget / 1000);
    setTooltipData({
      proteinConsumed: calories.proteinConsumed,
      proteinTarget: calories.proteinTarget,
      carbConsumed: calories.carbConsumed,
      carbTarget: calories.carbTarget,
      fatConsumed: calories.fatConsumed,
      fatTarget: calories.fatTarget,
    })
  }, [calories]);

  return (
    <div className="lg:w-4/12 lg:flex lg:justify-between inlne-block p-2 lg:p-2 my-3 lg:my-0">
      <div className="flex justify-center my-2 lg:hidden text-2xl items-center bg-black rounded-lg">
          <div>
            <img src={NutritionSvg} className="mx-2 w-8 h-8" alt="walking" />
          </div>
          Nutrition
        </div>
    <div className="lg:flex lg:items-center">
      <div className="lg:h-28 lg:w-28 h-52 w-52 m-auto tooltip">
        <PieChart
          lineWidth={40}
          data={[
            {
              title: "protein",
              value: calories.proteinConsumed,
              color: "#F45C84 ",
            },
            { title: "carbs", value: calories.fatConsumed, color: "#F5C90F" },
            { title: "fat", value: calories.carbConsumed, color: "#03C7FC" },
          ]}
          startAngle={260}
          children={
            <>
              <text
                dominantBaseline="central"
                stroke="white"
                x="50%"
                y="40%"
                textAnchor="middle"
              >
                {calories.calorieIntake}
              </text>
              <text
                dominantBaseline="central"
                stroke="white"
                x="50%"
                y="55%"
                textAnchor="middle"
                fontWeight={200}
                fontSize="0.7rem"
              >
                calories
              </text>
            </>
          }
        />
        <Tooltip data={tooltipData}/>
      </div>
      <div className="flex lg:flex-col h-full lg:m-1 justify-center my-3">
        <button
          className="bg-black w-10 rounded hover:cursor-pointer lg:m-0 mx-3"
          onClick={() =>
            dispatch(incrementCalories({ userId: calories.userId }))
          }
        >
          +
        </button>
        <div className="lg:flex lg:flex-col lg:text-sm text-lg">
          <span className="font-bold text-center ">{calTarget}K </span>
          <span className="text-center font-light">target</span>
        </div>
        <button
          className="bg-black w-10 rounded hover:cursor-pointer lg:m-0 mx-3"
          onClick={() =>
            dispatch(decrementCalories({ userId: calories.userId }))
          }
        >
          -
        </button>
      </div>
      <div className={"lg:flex lg:justify-center bg-black py-5 px-3 h-fit rounded-lg w-fit m-auto lg:m-0 my-5"}>
        <img src={chevron} alt="chevron" className="lg:rotate-0 rotate-90"/>
      </div>
    </div>
    <div className="lg:flex lg:flex-col lg:justify-center lg:mr-3 w-fit m-auto mb-5 lg:m-0">
      <div className="bg-gray-dark p-2 rounded-lg">
          <img src={bell} alt="bell" />
      </div>
    </div>
    </div>
  );
};

export default Nutrition;
