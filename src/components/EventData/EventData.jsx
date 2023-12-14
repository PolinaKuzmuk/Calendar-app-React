import { v4 as uuidv4 } from 'uuid';

export default function EventData({ data }) {
    if (!data) {
        return <p>Add an event.</p>
    }
    else {
        return (
            Object.entries(data).map(([key, value]) => (
                <ul key={uuidv4()}>
                    <li>
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