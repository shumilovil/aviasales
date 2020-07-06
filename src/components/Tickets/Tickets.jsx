import React from 'react';
import style from './Tickets.module.css'

export const Tickets = (props) => {
  return (
    <div className={style.tickets}>
      <div className={style.sortChoice}>
        <div className={style.sortParam + ' ' + style.cheapest}>
          <span>Самый дешевый</span>
        </div>
        <div className={style.sortParam + ' ' + style.fastest + ' ' + style.chosen}>
          <span>Самый быстрый</span>
        </div>
      </div>
      <div className={style.ticketsItem}>
        <div className={style.priceAndAirlineLogo}>
          <div className={style.price}>
            <span>13 400 Р</span>
          </div>
          <div className={style.airlineLogo}>
            <img src="https://pics.avs.io/99/36/S7.png" alt="" />
          </div>
        </div>
        <div className={style.route}>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
        </div>
        <div className={style.route}>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.ticketsItem}>
        <div className={style.priceAndAirlineLogo}>
          <div className={style.price}>
            <span>13 400 Р</span>
          </div>
          <div className={style.airlineLogo}>
            <img src="https://pics.avs.io/99/36/S7.png" alt="" />
          </div>
        </div>
        <div className={style.route}>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
        </div>
        <div className={style.route}>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
          <div className={style.routePiece}>
            <div className={style.firstLine}>
              <span>Mow-Hkt</span>
            </div>
            <div className={style.secondLine}>
              <span>10:45 - 08:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}