import React from 'react';
import { Tickets } from './Tickets';
import { connect } from 'react-redux';
import { getTickets } from '../../redux/tickets-reducer';
import { getProcessedTickets } from '../../redux/tickets-selectors';


class TicketsContainer extends React.Component {

    componentDidMount() {
        this.props.getTickets()
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

export default connect(marStateToProps, { getTickets })(TicketsContainer);

