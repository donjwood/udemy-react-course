import { Fragment } from "react";
import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", title: "Event 1" },
  { id: "e2", title: "Event 2" },
  { id: "e3", title: "Event 3" },
];

function EventsPage() {
 
  return (
    <Fragment>
      <h1>My Events Page</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default EventsPage;