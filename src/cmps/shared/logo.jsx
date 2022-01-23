export const Logo = ({ onClicked = Function.prototype }) => {

    const handleClick = () => {
        window.location.href = `/`
        onClicked();
    }

    return (
        <div className='logo'>
            <a aria-current="page" className="logo-link active">
                <h1 className="logo" onClick={handleClick}>
                    Go
                    <i className="fab fa-airbnb" aria-hidden="true"/>
                    bnb
                </h1>
            </a>
        </div>
    )
}