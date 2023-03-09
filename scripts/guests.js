import { getGuests } from "./database.js";
const allGuests = getGuests()

export const guestList = () => {
    
    let HTML = `<ul><h2>Current Guests</h2>`

    for (const guest of allGuests) {
        HTML += `<li id="guest--${guest.id}">${guest.name}</li>`
    }

    HTML += "</ul>"

    return HTML
}