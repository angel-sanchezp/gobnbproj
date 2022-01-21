
import React from 'react'




export class Guests extends React.Component {

    state = {
        num: 0,
        span: 0,
    }

    handleChange = ({ target }) => {
        // console.log('target', target)
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }



    cleanForm = () => {
        this.setState({ filterBy: { location: '', dateIn: '', dateOut: '' } })
    }

    onChangeNum(indicator) {
        this.setState(prevState => ({ ...prevState, span: prevState.span + indicator, filterBy: { ...prevState.filterBy.guests, adults: prevState.span + indicator } }))

    }
    onChangeValue(indicator) {
        this.setState(prevState => ({ ...prevState, num: prevState.span + indicator, filterBy: { ...prevState.filterBy.guests, children: prevState.num + indicator } }))

    }

    render() {

        const { num, span } = this.state


        return (
            <div className="dynamic-modal-child filter-guest-modal">
                <div className="modal-label"><div><span>Adults</span><span>Ages 13 or above</span></div>
                    <div><button type="button" onClick={() => this.onChangeNum(-1)}>-</button><span>{span}</span><button type="button" onClick={() => this.onChangeNum(1)}>+</button></div></div>
                <div className="modal-label"><div><span>Kids</span><span>Ages 0–12</span></div><div>
                    <button type="button" onClick={() => this.onChangeValue(-1)}>-</button><span>{num}</span><button type="button" onClick={() => this.onChangeValue(1)}>+</button>

                </div></div>
            </div>
        )

    }

}
