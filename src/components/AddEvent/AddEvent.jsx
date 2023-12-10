import React from "react";

export default function AddEvent({ isNewEventShown, setNewEventShown, clickedDay }) {
    return (
        <div className="add-event" style={isNewEventShown ? { display: 'block' } : {}}>
            <button type="button" className="btn btn-close" onClick={() => setNewEventShown(false)}></button>
            <form>
                <fieldset>
                    <legend>New event</legend>
                    <p className="event-date" id="event-date">{clickedDay}</p>
                    <label>Time*: <input type="time" required /></label><br />
                    <label>Season: <input type="text" id="season" name="season" placeholder="2024" /></label><br />
                    <label>Stadium: <input type="text" id="stadium" name="stadium"
                        placeholder="Enter a stadium" /></label><br />
                    <label>Home team: <input type="text" id="home-team" name="home-team"
                        placeholder="Enter a home team" /></label><br />
                    <label>Away team: <input type="text" id="away-team" name="away-team"
                        placeholder="Enter an away team" /></label><br />
                    <input className="btn" type="submit" value="Add event" />
                    <input className="btn" type="reset" value="Reset" />
                </fieldset>
            </form>
        </div>
    )
}