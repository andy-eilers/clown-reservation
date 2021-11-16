import { fetchReservations } from "./dataAccess.js"
import { gigs } from "./gigs.js"
import { deleteReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {
           mainContainer.innerHTML = gigs() 
        }
    )    
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const[,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})