export function StayAmenities({stay}) {

    return (
        <section className="amenities-container">
            <div className="amenities">
                <h2>What this place offer</h2>
                {stay.amenities.map((amenity, idx) => (
                    <li key={idx}>{amenity} </li>
                ))}
            </div>
        </section>
    )
}