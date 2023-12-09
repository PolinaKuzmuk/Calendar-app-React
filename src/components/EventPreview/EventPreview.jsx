import React from "react";

export default function CalendarBody() {
    return (
        <div className="event-preview">
            <button type="button" className="btn btn-close"></button>
            <div className="view-event" id="view-event"></div>
            <button type="button" className="btn btn-add-event">Add event</button>
        </div>
    )
}