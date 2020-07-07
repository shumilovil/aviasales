import React from 'react';
import { Tickets } from './Tickets';
import { getTickets } from '../../api/api';
import { connect } from 'react-redux';
import { setTickets } from '../../redux/tickets-reducer';
import { getProcessedTickets } from '../../redux/tickets-selectors';


class TicketsContainer extends React.Component {

    componentDidMount() {
        getTickets().then(response => {            
            this.props.setTickets(response)      
        })
    }

    render() {
        return (
            <Tickets tickets={this.props.tickets}/>
        )
    }
}

const marStateToProps = (state) => {
    return {
        tickets: getProcessedTickets(state)
    }
}

export default connect(marStateToProps, { setTickets })(TicketsContainer)
