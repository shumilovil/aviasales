import React, { useState, useEffect } from 'react';
import style from './Tickets.module.css'
import { Ticket } from './Ticket';

export const Tickets = (props) => {

    const initialAmountOnPage = 10;

    const [sort, setSort] = useState({ fastest: true, cheapest: false });
    const [amountOnPage, setAmount] = useState(initialAmountOnPage);

    const handleSortCheapest = () => {
        setSort({ fastest: false, cheapest: true })
    }

    const handleSortFastest = () => {
        setSort({ fastest: true, cheapest: false })
    }

    const handleOnPageAmount = () => {
        setAmount(amountOnPage + initialAmountOnPage);
    }

    useEffect(() => {
        setAmount(initialAmountOnPage);
    }, [props.tickets])

    return (
        <div className={style.tickets}>
            <div className={style.sortChoice}>

                <div className={sort.cheapest
                    ? style.chosen + ' ' + style.sortParam + ' ' + style.cheapest
                    : style.sortParam + ' ' + style.cheapest}
                    onClick={handleSortCheapest}>
                    <span>Самый дешевый</span>
                </div>

                <div className={sort.fastest
                    ? style.chosen + ' ' + style.sortParam + ' ' + style.fastest
                    : style.sortParam + ' ' + style.fastest}
                    onClick={handleSortFastest}>
                    <span>Самый быстрый (туда)</span>
                </div>
            </div>

            <div className={style.ticketsAmount}>
                <span>Билетов найдено: {props.tickets.length}</span>
            </div>

            {sort.fastest
                && [...props.tickets]
                    .sort((a, b) => { return a.segments[0].duration - b.segments[0].duration })
                    .slice(0, amountOnPage)
                    .map((t, index) => {
                        return (
                            <Ticket ticket={t} key={index} />
                        )
                    })}

            {sort.cheapest
                && [...props.tickets]
                    .sort((a, b) => { return a.price - b.price })
                    .slice(0, amountOnPage)
                    .map((t, index) => {
                        return (
                            <Ticket ticket={t} key={index} />
                        )
                    })
            }

            {
                amountOnPage < props.tickets.length &&
                <div className={style.amountOnPage} onClick={handleOnPageAmount}>
                    <span>
                        Показать еще: {
                            (props.tickets.length - amountOnPage) < initialAmountOnPage
                                ? props.tickets.length - amountOnPage
                                : initialAmountOnPage
                        }
                    </span>
                </div>
            }

        </div>
    )
}