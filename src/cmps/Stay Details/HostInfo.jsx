export function HostInfo({stay}) {
    const {host} = stay;
    return (
        <section className="host-info-container">
            <div className="host">
                <h2>Hosted by {host.fullname} </h2>
                <img src={host.imgUrl} alt="" />
            </div>
            <div className="host-rating">
                Reviews, superhost etc.
            </div>
            <div className="host-summery">
                information about the host
            </div>
        </section>
    )
}