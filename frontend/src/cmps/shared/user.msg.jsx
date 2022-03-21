import React from 'react'

import { eventBusService } from '../../services/event-bus.service.js'


export class UserMsg extends React.Component {

  

  removeEvent;

  state = {
    msg: null
  }

  componentDidMount() {
    // Here we listen to the event that we emited, its important to remove the listener 
    this.removeEvent = eventBusService.on('show-user-msg', (msg) => {
      this.setState({ msg })
      setTimeout(()=>{
        this.setState({ msg : null })
      }, 100000000000000000000000000000000)
    })
  }
// 2500
  componentWillUnmount() {
    this.removeEvent()
  }

  render() {
    if (!this.state.msg) return <span></span>
    const msgClass = this.state.msg.type || ''
    return (
      <section className={'user-msg ' + msgClass}>
        <button onClick={() => {
          this.setState({ msg: null })
        }}></button>
        {this.state.msg.txt}
      </section>
    )
  }
}
