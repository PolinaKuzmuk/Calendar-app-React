import React from "react";

export default function CalendarBody() {
    return (
        <div className="add-event">
            <button type="button" className="btn btn-close"></button>
            <form>
                <fieldset>
                    <legend>New event</legend>
                    <p className="event-date" id="event-date"></p>
                    <label>Time*: <input type="time" required /></label>
                    <label>Season: <input type="text" id="season" name="season" placeholder="2024" /></label>
                    <label>Stadium: <input type="text" id="stadium" name="stadium"
                        placeholder="Enter a stadium" /></label>
                    <label>Home team: <input type="text" id="home-team" name="home-team"
                        placeholder="Enter a home team" /></label>
                    <label>Away team: <input type="text" id="away-team" name="away-team"
                        placeholder="Enter an away team" /></label>
                    <input className="btn" type="submit" value="Add event" />
                    <input className="btn" type="reset" value="Reset" />
                </fieldset>
            </form>
        </div>
    )
}