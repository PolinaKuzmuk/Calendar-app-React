import {useMemo, useState, useEffect} from "react";

const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];
const daysOfWeekArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function CalendarBody({ date: currentDate, setDate }) {
    const daysInMonth = useMemo(() => new Date(currentDate.getFullYear(), monthArr.indexOf(currentDate.getMonth()) + 1, 0).getDate(), [currentDate])
    const firstDay = useMemo(() => new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(), [currentDate]);
    const adjustedFirstDay = useMemo(() => firstDay === 0 ? 7 : firstDay, [firstDay]);
    const [daysArr, setDaysArr] = useState([])

    function setNewMonth(value) {
        setDate(prevDate => {
            let currentMonthIndex = currentDate.getMonth();
            let year = prevDate.getFullYear();
            console.log('prev year ', year)
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

    return (
        <div className="calendar-body">
            <div className="month-wrap">
                <button className="btn btn-prev" type="button" onClick={() => setNewMonth(-1)}>Previous</button>
                <p className="month">{monthArr[currentDate.getMonth()]}</p>
                <p className="year">{currentDate.getFullYear()}</p>
                <button className="btn btn-next" type="button" onClick={() => setNewMonth(1)}>Next</button>
            </div>
            <div className="days-of-week">
                {daysOfWeekArray.map(day => {
                    return <div key={day}>{day}</div>
                })}
            </div>
            <div className="days">
                {daysArr.map(day => {
                    return <div key={day} className={`day`} style={day === 1 ? firstDayPosition : {}}>{day}</div>
                }
                )}
            </div>
        </div>
    )
}