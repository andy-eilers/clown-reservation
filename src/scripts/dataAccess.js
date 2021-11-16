const applicationState = {
    reservations: []
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (gigRequests) => {
                applicationState.reservations = gigRequests
            }
        )
}



export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}

export const sendReservation = (userGigRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userGigRequest)
    }

    return fetch(`${API}/reservations`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const deleteReservation = (id) => {
    return fetch (`${API}/reservations/${id}`, { method: "DELETE" })
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}