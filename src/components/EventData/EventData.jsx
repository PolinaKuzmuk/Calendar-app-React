export default function EventData ({ data }) {
    if (!data) {
        return <p>Add an event.</p>
    }
    else {
        return (
            Object.entries(data).map(([key, value]) => (
                <ul>
                    <li key={key}>
                        {typeof value === 'object' ? (
                            value === null ? (
                                `${key}: -`
                            ) : (
                                <>
                                    {key}: <EventData data={value} />
                                </>
                            )
                        ) : (
                            `${key}: ${value}`
                        )}
                    </li>
                </ul>
            ))
        );
    }
}