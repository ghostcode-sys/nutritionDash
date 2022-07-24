import React from "react";
import "./Style/index.css";
import Level from "./Level";
const Tooltip = ({data}) => {
  return (
      <div className="tooltiptext bg-gray w-60 rounded-lg flex-col shadow-cs shadow-black border-1">
        <div className="bg-black/50 m-2 px-2 py-1 rounded-lg">
          <div className="flex justify-between text-xs mx-2 mt-2">
            <div>Protein</div>
            <div>{data.proteinTarget}g</div>
          </div>
          <Level color={"pink"} value={data.proteinConsumed} maxLevel={data.proteinTarget}/>
        </div>
        <div className="bg-black/50 m-2 px-2 py-1 rounded-lg">
          <div className="flex justify-between text-xs mx-2 mt-2">
            <div>Fats</div>
            <div>{data.fatTarget}g</div>
          </div>
          <Level color={"blue"} value={data.fatConsumed} maxLevel={data.fatTarget}/>
        </div>
        <div className="bg-black/50 m-2 px-2 py-1 rounded-lg">
          <div className="flex justify-between text-xs mx-2 mt-2">
            <div>Carbs</div>
            <div>{data.carbTarget}g</div>
          </div>
          <Level color={"yellow"} value={data.carbConsumed} maxLevel={data.carbTarget}/>
        </div>
      </div>
  );
};

export default Tooltip;
