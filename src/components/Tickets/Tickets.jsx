import React, { useState } from 'react';
import style from './Tickets.module.css'
import { Ticket } from './Ticket';

export const Tickets = (props) => {  

  const [sort, setSort] = useState({ fastest: true, cheapest: false });

  const handleSortCheapest = () => {
    setSort({ fastest: false, cheapest: true })
  }

  const handleSortFastest = () => {
    setSort({ fastest: true, cheapest: false })
  }

  const copyTickets = [...props.tickets]

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
          <span>Самый быстрый</span>
        </div>
      </div>

      {sort.fastest
        && copyTickets
          .sort((a, b) => { return a.segments[0].duration - b.segments[0].duration })
          .map((t, index) => {
            return (
              <Ticket ticket={copyTickets[index]} key={index} />
            )
          })}

      {sort.cheapest
        && copyTickets
          .sort((a, b) => { return a.price - b.price })
          .map((t, index) => {
            return (
              <Ticket ticket={copyTickets[index]} key={index} />
            )
          })
      }

    </div>
  )
}