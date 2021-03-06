import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import "./Schedule.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import { getEvent } from "../../assets/data/api";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../ErrorPage/ErrorPage";

const Schedule = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  useEffect(async () => {
    setEvent((await getEvent(eventId)) ?? null);
  }, [getEvent, eventId, setEvent]);

  if (event === undefined) return <LoadingSpinner />;

  if (event === null) return <ErrorPage />;

  const { series, schedule, theme } = event;

  return (
    <Layout
      eventId={eventId}
      fontType={theme.fontType}
      themeType={theme.primaryColour}
      textColor={theme.textColour}
      highlightColor={theme.highlightColour}
    >
      <PageHeader title={series} subtitle="Event Schedule" />

      <div className="schedule">
        {schedule.map((schedule, i) => (
          <ScheduleItem
            key={"schedule" + i}
            header={schedule.name}
            subHeader={schedule.title}
            description={schedule.description}
            alternateDescription={schedule.alternateDescription}
          />
        ))}
      </div>
    </Layout>
  );
};
export default Schedule;
