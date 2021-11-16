import { gigRequest } from "./gigRequest.js"
import { Reservations } from "./Reservations.js"

export const gigs = () => {
    return `
    <h1>Hire Buttons and Lollipop</h1>
    <section class="gigRequest">
        ${gigRequest()}
    </section>

    <section class="reservationRequests">
    <h2>Reservation Request</h2>
        ${Reservations()}
    </section>
    `
}
