import { Fragment } from "react";

import { useRouteLoaderData, json } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetailPage() {
 
  const data = useRouteLoaderData('event-detail');

  return (
    <Fragment>
      <EventItem event={data.event} />
    </Fragment>
  );
}

export default EventDetailPage;

export async function loader ({request, params}) {
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id);
  if(!response.ok) {
    throw json({message: 'Could not fetch details for selected event.'}, {status: 500});
  }
  return response;
}