import { StayPreview } from './StayPreview.jsx'



export function StayList({ stays, dateIn, dateOut, onStayClicked }) {
    return (
        <ul className="list-container">
                {stays.map(stay => (<StayPreview key={stay._id} stay={stay} />))}
        </ul>
    )

}