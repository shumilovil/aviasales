import React from 'react';
import style from './Tickets.module.css';
import { convertDate, convertTime, convertDuration, convertPrice } from './Ticket-helper';

export const Ticket = (props) => {
    const { carrier, price, segments } = props.ticket;

    return (
        <div className={style.ticketsItem}>

            <div className={style.priceAndAirlineLogo}>
                <div className={style.price}>
                    <span>{convertPrice(price)} Р</span>
                </div>
                <div className={style.airlineLogo}>
                    <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="" />
                </div>
            </div>

            {
                segments.map((segment, index) => {
                    return (
                        <div className={style.route} key={index}>
                            <div className={style.routePiece}>
                                <div className={style.firstLine}>
                                    <span>{segment.origin}-{segment.destination}</span>
                                </div>
                                <div className={style.secondLine}>
                                    <span>
                                        <div>{convertDate(segment.date)}</div>
                                        <div>{convertTime(segment.date)}</div>
                                    </span>
                                </div>
                            </div>
                            <div className={style.routePiece}>
                                <div className={style.firstLine}>
                                    <span>В пути</span>
                                </div>
                                <div className={style.secondLine}>
                                    <span>{convertDuration(segment.duration)}</span>
                                </div>
                            </div>
                            <div className={style.routePiece}>
                                <div className={style.firstLine}>
                                    <span>Пересадки: {segment.stops.length}</span>
                                </div>
                                <div className={style.secondLine}>
                                    <span>{segment.stops.join(', ')}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

