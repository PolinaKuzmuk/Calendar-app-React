export const EventData = ({ data }) => {
    if (!data) {
        return <p>Add an event.</p>
    }
    else {
        return (Object.values(data).forEach((item) => {
            // console.log('Object.entries(item)', Object.entries(item))
            return (<ul>
                {Object.entries(item).map(([key, value]) => {
                    if (typeof value === 'object') {
                        if (value === null) {
                            return <ul key={key}>{key}: -</ul>
                        }
                        return <ul key={key}>{EventData(value)}</ul>
                    } else {
                        return <li key={key}>{key}: {value}</li>
                    }
                })}
            </ul>)
        })
        )
    }
}