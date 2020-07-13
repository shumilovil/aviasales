import React from 'react';
import { Tickets } from './Tickets';
import { connect } from 'react-redux';
import { getTickets } from '../../redux/tickets-reducer';
import { getFilteredTicketsFrom } from '../../redux/tickets-selectors';


class TicketsContainer extends React.Component {

    componentDidMount() {
        this.props.getTickets()
    }

    render() {
        return (
            <Tickets tickets={this.props.tickets} />
        )
    }
}

const marStateToProps = (state) => {
    return {
        tickets: getFilteredTicketsFrom(state)
    }
}

export default connect(marStateToProps, { getTickets })(TicketsContainer);

