export default {
    getEventsList: () => {
        return (fetch('../sportData.json')
            .then((res) => res.json()))
    }
}