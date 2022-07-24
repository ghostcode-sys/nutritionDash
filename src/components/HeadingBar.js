import React from "react";
import walking from "../svgs/walking.svg";
import Workout from "../svgs/workout.svg";
import Nutrition from "../svgs/nutrition.svg";
const HeadingBar = () => {
  return (
    <div className="lg:flex hidden">
      <div className="w-6/12 mx-3">
        <div className="flex px-3 justify-end mr-2">
          <div>
            <img src={walking} className="mx-2" alt="walking" />
          </div>
          Steps
        </div>
      </div>
      <div className="w-2/12 mx-5">
        <div className="flex justify-center items-center">
          <div>
            <img src={Workout} className="mx-2" alt="workout" />
          </div>
          Workout
        </div>
      </div>
      <div className="w-4/12">
        <div className="flex justify-start">
          <div className="px-4">
            <img src={Nutrition} className="mx-2" alt="nutrition" />
          </div>
          Nutrition
        </div>
      </div>
    </div>
  );
};

export default HeadingBar;
