
import React from 'react'




export class Guests extends React.Component {

    state = {
        adults: 0,
        children: 0,
    }

    handleChange = ({ target }) => {
        // console.log('target', target)
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    changeAdults(indicator) {
        const { adults } = this.state
        if (!adults && indicator === -1) return

        const newValue = this.state.adults + indicator
        this.setState({ adults: newValue })
        console.log('adults value in guests', newValue)
        this.props.onChangeAdults(newValue)
    }
    changeChildren(indicator) {
        const { children } = this.state
        console.log(children)
        if (!children && indicator === -1) return

        const newValue = this.state.children + indicator
        this.setState({ children: newValue })
        console.log('children value in guests', newValue)
        this.props.onChangeChildren(newValue)
    }

    render() {

        const { adults, children } = this.state


        return (
            <div className="dynamic-modal-child filter-guest-modal">
                <div className="modal-label"><div><span>Adults</span><span>Ages 13 or above</span></div>
                    <div><button type="button" onClick={() => this.changeAdults(-1)}>-</button><span>{adults}</span><button type="button" onClick={() => this.changeAdults(1)}>+</button></div></div>
                <div className="modal-label"><div><span>Kids</span><span>Ages 0–12</span></div><div>
                    <button type="button" onClick={() => this.changeChildren(-1)}>-</button><span>{children}</span><button type="button" onClick={() => this.changeChildren(1)}>+</button>

                </div></div>
            </div>
        )

    }

}
