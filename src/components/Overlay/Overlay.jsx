export default function Overlay({ isPopupShown }) {
    return <div id="overlay" style={isPopupShown ? { display: 'block' } : {}}></div>
}