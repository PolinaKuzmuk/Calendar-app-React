import './App.css';
import CalendarBody from './components/CalendarBody/CalendarBody';
import EventPreview from './components/EventPreview/EventPreview';
import AddEvent from './components/AddEvent/AddEvent';
import { useState, useEffect } from 'react';

function App() {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [eventList, setEventList] = useState(null)

  useEffect(() => {
    if (!eventList) {

    fetch('http://localhost:3000/sportData.json')
      .then((res) => {
        console.log('res ', res)
        const list = res.json()
      setEventList(list)})
    }
  }, [eventList])
  
  console.log('eventList ', eventList)
  return (
    <div className='main'>
      <h1 className="title">Calendar</h1>
      <CalendarBody date={date} setDate={setDate} />
      {/* <EventPreview /> */}
      {/* <AddEvent /> */}
      <div id="overlay"></div>
    </div>
  );
}

export default App;