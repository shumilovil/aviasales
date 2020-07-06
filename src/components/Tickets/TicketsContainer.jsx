import React from 'react';
import { Tickets } from './Tickets';
import { getTickets } from '../../api/api';


export class TicketsContainer extends React.Component {

    componentDidMount() {
        getTickets()
    }

    render() {
        return (
            <Tickets />
        )
    }
}