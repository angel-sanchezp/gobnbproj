export function StayAmenities({stay}) {

    return (
        <section className="amenities-container">
            <div className="amenities">
                {stay.amenities.map((amenity, idx) => (
                    <span key={idx}>{amenity}, </span>
                ))}
            </div>
        </section>
    )
}