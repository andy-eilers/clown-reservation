import { sendReservation } from "./dataAccess.js"

export const gigRequest = () => {
    let html = `
    <div class="field">
        <label class="label" for="parentName">Parent Name</label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">Child Name</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="guestNum">Number of Guests</label>
        <input type="number" name="guestNum" class="input" />
    </div>
    <div class="field">
        <label class="label" for="partyAddress">Address</label>
        <input type="text" name="partyAddress" class="input" />
    </div>
    <div class="field">
        <label class="label" for="partyDate">Party Date</label>
        <input type="date" name="partyDate" class="input" />
    </div>
    <div class="field">
        <label class="label" for="partyDuration">Duration in Hours</label>
        <input type="number" name="partyDuration" class="input" />
    </div>

    <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userGuestNum = document.querySelector("input[name='guestNum']").value
        const userPartyAddress = document.querySelector("input[name='partyAddress']").value
        const userDate = document.querySelector("input[name='partyDate']").value
        const userPartyDuration = document.querySelector("input[name='partyDuration']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            guestNum: parseInt(userGuestNum),
            address: userPartyAddress,
            partyDate: userDate,
            partyDuration: userPartyDuration
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})