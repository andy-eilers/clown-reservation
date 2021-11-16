import { getReservations } from "./dataAccess.js"

export const Reservations = () => {
    const reservations = getReservations()
    const convertReservationToListElement = (reservation) => {
        return `
        <li>${reservation.parentName}
        <button class="request__delete"
        id="reservation--${reservation.id}">
        Deny
        </button>
        </li>
        `
    }
    
    let html = 
    `
    <ul>
        ${
            reservations.map(convertReservationToListElement).join("")
        }
    </ul>
    `

    return html
}