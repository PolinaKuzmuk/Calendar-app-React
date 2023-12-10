import { useMemo, useState, useEffect } from "react";

const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];
const daysOfWeekArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function CalendarBody({ date: currentDate, setDate, eventList, showPopup, setPopupData, setClickedDay }) {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const daysInMonth = useMemo(() => new Date(currentYear, monthArr.indexOf(currentMonth - 1), 0).getDate(), [currentYear, currentMonth])
    const firstDay = useMemo(() => new Date(currentYear, currentMonth - 1, 1).getDay(), [currentYear, currentMonth]);
    const adjustedFirstDay = useMemo(() => firstDay === 0 ? 7 : firstDay, [firstDay]);
    const [daysArr, setDaysArr] = useState([])

    function setNewMonth(value) {
        setDate(prevDate => {
            let currentMonthIndex = currentDate.getMonth();
            let year = prevDate.getFullYear();
            currentMonthIndex = currentMonthIndex + value;
            if (currentMonthIndex < 0) {
                currentMonthIndex = 11;
                year = year - 1;
            } else if (currentMonthIndex > 11) {
                currentMonthIndex = 0;
                year = year + 1;
            }

            return new Date(year, currentMonthIndex, 1);
        });
    }

    useEffect(() => {
        let daysArr = []
        for (let index = 1; index <= daysInMonth; index++) {
            daysArr.push(index)
        }
        setDaysArr(daysArr)
    }, [daysInMonth])

    const firstDayPosition = {
        gridColumnStart: adjustedFirstDay
    }

    const adjustedEventList = eventList.reduce((acc, el) => {
        if (acc[el.dateVenue]) {
            acc[el.dateVenue].push(el)
        }
        else {
            acc[el.dateVenue] = [];
            acc[el.dateVenue].push(el);
        }
        return acc;
    }, [])

    return (
        <div className="calendar-body">
            <div className="month-wrap">
                <button className="btn btn-prev" type="button" onClick={() => setNewMonth(-1)}>Previous</button>
                <p className="month">{monthArr[currentMonth - 1]}</p>
                <p className="year">{currentYear}</p>
                <button className="btn btn-next" type="button" onClick={() => setNewMonth(1)}>Next</button>
            </div>
            <div className="days-of-week">
                {daysOfWeekArray.map(day => {
                    return <div key={day}>{day}</div>
                })}
            </div>
            <div className="days">
                {daysArr.map(day => {
                    const adjustedDate = `${currentYear}-${currentMonth < 10 ? '0' : ''}${currentMonth}-${day < 10 ? '0' : ''}${day}`
                    const hasEvent = adjustedEventList[adjustedDate]
                    const thisDay = `${new Date(currentYear, currentMonth, day)}`;
                    return <div key={day} className={`day ${hasEvent ? 'is-event' : ''}`} style={day === 1 ? firstDayPosition : {}} onClick={() => {showPopup(true); setPopupData(hasEvent); setClickedDay(thisDay)}}>{day}</div>
                }
                )
                }
            </div>
        </div>
    )
}