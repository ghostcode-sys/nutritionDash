import React, { useState, useEffect } from "react";
import Avatar from "../svgs/avatar.webp";
import ProgressBar from "./ProgressBar";
import { useDispatch } from "react-redux";
import walking from "../svgs/walking.svg"
import {
  incrementStepTarget,
  decrementStepTarget,
} from "../Reducer/userProfile";
import WorkoutDetail from "./WorkoutDetail";
import Nutrition from "./Nutrition";

const ProfileContainer = ({ user }) => {
  const dispatch = useDispatch();

  const [stepTarget, setStepTarget] = useState("");
  const [calories, setCalories] = useState({});

  useEffect(() => {
    let cal = {
      userId: user.userId,
      calorieIntake: user.calorieIntake,
      calorieTarget: user.calorieTarget,
      proteinConsumed: user.proteinConsumed,
      proteinTarget: user.proteinTarget,
      carbConsumed: user.carbConsumed,
      carbTarget: user.carbTarget,
      fatConsumed: user.fatConsumed,
      fatTarget: user.fatTarget,
    };
    let val = user.stepsTarget / 1000;
    setStepTarget(val);
    setCalories(cal);
  }, [user]);

  return (
    <div className="bg-gray my-5 lg:flex block border-b lg:border-none">
      <div className="lg:w-6/12 lg:flex lg:items-center lg:mx-3 p-3 lg:p-0 inline-block w-full">
        <div className="lg:p-2 lg:w-2/12 m-auto w-fit mt-2 lg:m-0">
          <img src={Avatar} alt="avatar" className="lg:w-14 lg:h-14 w-24 h-24 rounded-full" />
        </div>
        <div className="lg:inline-block lg:w-5/12 lg:p-2 text-center lg:text-start">
          <p className="font-semibold text-xl lg:text-base">{user.name}</p>
          <p className="font-light text-sm lg:text-xs">{user.email}</p>
        </div>
        <div className="lg:w-5/12 lg:flex lg:items-center lg:justify-end inline-block w-full">
        <div className="flex justify-center my-2 lg:hidden text-2xl items-center bg-black rounded-lg">
          <div>
            <img src={walking} className="mx-2 w-5 h-8" alt="walking" />
          </div>
          Steps
        </div>
          <ProgressBar
            stepsTargeted={user.stepsTarget}
            stepsWalked={user.stepsWalked}
          />
          <div className="flex lg:flex-col h-full lg:m-1 justify-center my-3">
            <button
              className=" bg-black w-10 rounded hover:cursor-pointer lg:m-0 mx-3"
              onClick={() =>
                dispatch(incrementStepTarget({ userId: user.userId }))
              }
            >
              +
            </button>
            <div className="lg:flex lg:flex-col lg:text-sm text-lg">
              <span className="font-bold text-center ">{stepTarget}K </span>
              <span className="text-center font-light">target</span>
            </div>
            <button
              className="bg-black w-10 rounded hover:cursor-pointer mx-3 lg:m-0"
              onClick={() =>
                dispatch(decrementStepTarget({ userId: user.userId }))
              }
            >
              -
            </button>
          </div>
        </div>
      </div>
      <WorkoutDetail
        performedDate={user.performedDate}
        scheduledDate={user.scheduledDate}
        feedback={user.feedback}
      />
      <Nutrition  calories={calories}/>
    </div>
  );
};

export default ProfileContainer;
