import './App.css';
import CalendarBody from './components/CalendarBody/CalendarBody';
import EventPreview from './components/EventPreview/EventPreview';
import Overlay from './components/Overlay/Overlay';
import AddEvent from './components/AddEvent/AddEvent';
import { useState, useEffect } from 'react';

function App() {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [eventList, setEventList] = useState([]);
  const [isPopupShown, setPopupShown] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const [isNewEventShown, setNewEventShown] = useState(null);
  const [clickedDay, setClickedDay] = useState(null);

  useEffect(() => {
    if (!eventList.length) {
      fetch('https://raw.githubusercontent.com/PolinaKuzmuk/Calendar-app-React/main/src/sportData.json')
        .then(res => res.json())
        .then(res => setEventList(res.data))
    }
  }, [eventList])

  return (
    <div className='main'>
      <h1 className="title">Calendar</h1>
      <CalendarBody date={date} setDate={setDate} eventList={eventList} showPopup={setPopupShown} setPopupData={setPopupData} setClickedDay={setClickedDay} />
      <EventPreview isPopupShown={isPopupShown} showPopup={setPopupShown} popupData={popupData} setNewEventShown={setNewEventShown} />
      <AddEvent isNewEventShown={isNewEventShown} clickedDay={clickedDay} setNewEventShown={setNewEventShown} />
      <Overlay isPopupShown={isPopupShown} setNewEventShown={setNewEventShown} />
    </div>
  );
}

export default App;