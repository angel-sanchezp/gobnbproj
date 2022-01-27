export function HostInfo({stay}) {
    const {host} = stay;
    return (
        <section className="host-info-container">
            <div className="host">
                <div><img src={host.imgUrl} className="host-img"alt="" /></div>
                <div className="host-general">
                    <h2>Hosted by {host.fullname} </h2>
                    <div>
                        <ol>
                            <li>Joined last year</li>
                        </ol>
                    </div>
                </div>
            </div>
            {/* <div className="host-rating">
                Reviews, superhost etc.
            </div> */}
            <div className="host-summery">
                <p>
                    Hello. I am a big traveller and Airbnb is a great way to make
                    new friends and meet new people.
                </p>
                <p>
                    <h3>During your stay</h3>
                    There is someone within 10 minutes to meet your expectations.
                </p>
            </div>
        </section>
    )
}