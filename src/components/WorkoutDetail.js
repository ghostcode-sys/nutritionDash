import React, { useState, useEffect } from "react";
import person from "../svgs/person.svg";
import calender from "../svgs/calender.svg";
import chevron from "../svgs/chevron.svg";
import exclamation from "../svgs/exclamation.svg";
import Workout from "../svgs/workout.svg"

const WorkoutDetail = ({ performedDate, scheduledDate, feedback }) => {
 
  const [isSameDay, setIsSameDay] = useState(false)
  const [date, setDate] = useState({
    pDay: "",
    pMon: "",
    sDay: "",
    sMon: "",
  });
  useEffect(() => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    let pDate = new Date(performedDate);
    let sDate = new Date(scheduledDate);
    let nDate = new Date(Date.now())
    if(sDate.getDate() === nDate.getDate() && sDate.getMonth() === nDate.getMonth()){
        setIsSameDay(true)
    }
    setDate({
      pDay: pDate.getDate(),
      pMon: months[pDate.getMonth()],
      sDay: sDate.getDate(),
      sMon: months[sDate.getMonth()],
    });
  }, [performedDate, scheduledDate]);

  return (
    <div className="lg:w-2/12 lg:mx-5 lg:flex lg:justify-evenly lg:items-center w-full inline-block p-2 lg:p-0">
      <div className="flex justify-center my-2 lg:hidden text-2xl items-center bg-black rounded-lg">
          <div>
            <img src={Workout} className="mx-2 w-8 h-8" alt="walking" />
          </div>
          Workout
        </div>
      <div className="flex lg:flex-col justify-around lg:h-full">
        <div className="flex justify-center lg:items-center">
          <img src={person} alt="person" className="lg:w-8 lg:h-8 mr-1 w-10 h-10" />
          {date.pDay}<br/> {date.pMon}
        </div>
        <div className={isSameDay? "flex justify-center lg:items-center rounded-lg bg-red p-1 ":"flex justify-center lg:items-center rounded-lg "}>
          <img src={calender} alt="calender" className="lg:w-8 lg:h-8 mr-2" />
          {date.sDay} <br/> {date.sMon}
        </div>
      </div>
      <div className={feedback?"flex justify-center lg:mx-5 bg-black py-5 px-3 h-fit rounded-lg bg-red w-fit m-auto":"flex justify-center lg:mx-5 bg-black py-5 px-3 h-fit rounded-lg w-fit m-auto"}>
        <img src={feedback?exclamation:chevron} alt="chevron" className={!feedback &&"rotate-90 lg:rotate-0"}/>
      </div>
    </div>
  );
};

export default WorkoutDetail;
