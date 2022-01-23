export function HostInfo({stay}) {
    const {host} = stay;
    return (
        <section className="host-info-container">
            <div className="host">
                <div className="h2-general"><h2>Hosted by {host.fullname} </h2></div>
                <img src={host.imgUrl} className="host-img"alt="" />
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