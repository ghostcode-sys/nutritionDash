import React, { useEffect, useState } from "react";
import HeadingBar from "./HeadingBar"
import ProfileContainer from "./ProfileContainer";
import { useSelector } from "react-redux/es/exports";

const Landing = () => {
    const [users, setUsers] = useState([])
    const state = useSelector(state => state.userProfile.user)
    useEffect(() => {
      setUsers([...state])
    }, [state])
    
  return (
    <div className="lg:m-1 p-5 bg-gray">
      <div className="bg-black text-white rounded-lg p-5">
        <HeadingBar />
        {users.map(ele => {
            return (<ProfileContainer key={ele.userId} user={ele}/>)
        })}
      </div>
    </div>
  );
};

export default Landing;
