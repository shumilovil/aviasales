import React from 'react';
import style from './Tickets.module.css';

export const Ticket = (props) => {
    const { carrier, priceConverted, segments } = props.ticket;



    return (
        <div className={style.ticketsItem}>

            <div className={style.priceAndAirlineLogo}>
                <div className={style.price}>
                    <span>{priceConverted} Р</span>
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
                                        <div>{segment.dateConverted}</div>
                                        <div>{segment.timeConverted}</div>
                                    </span>
                                </div>
                            </div>
                            <div className={style.routePiece}>
                                <div className={style.firstLine}>
                                    <span>В пути</span>
                                </div>
                                <div className={style.secondLine}>
                                    <span>{segment.durationConverted}</span>
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

