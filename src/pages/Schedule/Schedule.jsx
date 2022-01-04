import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import "./Schedule.scss";

const Schedule = () => {
  return (
    <div className="schedule">
      <ScheduleItem header="Welcome" />
      <ScheduleItem
        header="header"
        subHeader="subheader"
        description="lorem ipsum"
      />
      <ScheduleItem
        header="header"
        subHeader="subheader"
        description="lorem ipsum"
      />
      <Navbar/>
    </div>
  );
};

export default Schedule;
