import EventData from "../EventData/EventData";
import { v4 as uuidv4 } from 'uuid';

export default function EventPreview({ isPopupShown, showPopup, popupData, setNewEventShown }) {
    return (
        <div className="event-preview" style={isPopupShown ? { display: 'block' } : {}}>
            <button type="button" className="btn btn-close" onClick={() => showPopup(false)}></button>
            <div className="view-event" id="view-event">
                <div className="event-wrap">
                    <EventData key={`${new Date()}`} data={popupData} />
                </div>
            </div>
            <button type="button" className="btn btn-add-event" onClick={() => setNewEventShown(true)}>Add event</button>
        </div>
    )
}