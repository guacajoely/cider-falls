import { getAreas, getGuests, getAreaServices, getServices} from "./database.js";
const allAreas = getAreas()
const allServices = getServices()
const allAreaServices = getAreaServices()
const allGuests = getGuests()

export const areas = () => {
    
    let HTML = ''

    for (const area of allAreas) {
        HTML += `<div class="area-card">
                    <h2 class="card-title" id="area--${area.id}">${area.name}</h2>`
        for (const areaService of allAreaServices) {
            if(areaService.areaID === area.id){
                const matchedService = allServices.find(item => item.id === areaService.serviceID);
                HTML += `<div id="service--${matchedService.id}">${matchedService.name}</div>`
            }
        }

        HTML += "</div>"
    }

    HTML += "</div>"

    return HTML
}

//FUNTION THAT LOOPS THROUGH THE GUESTS ARRAY AND COUNT EACH GUEST WITH A MATCHING areaID
const countAreaGuests = (areaID, guestsArray) => {
              
    let guestCount = 0
    for (const guest of guestsArray){
        if (guest.areaID === areaID){
            guestCount++
        }
    }
    return guestCount
}

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON AN AREA CARD?
        if (itemClicked.id.startsWith("area")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED AREA?
            const [,primaryKey] = itemClicked.id.split("--")
            const primaryKeyOfArea =parseInt(primaryKey)

            //PASS PRIMARY KEY AND GUESTS ARRAY INTO countAreaGuests FUNCTION
            const guestCount = countAreaGuests(primaryKeyOfArea,allGuests)

            //GRAB THE AREA NAME FROM THE ARRAY OF AREAS USING THE ID
            let matchedAreaObject = allAreas.find(item => item.id === primaryKeyOfArea);
            const matchingArea = matchedAreaObject.name

            //ALERT IF ONLY ONE GUEST
            if(guestCount === 1){
                window.alert(`${matchingArea} currently has ${guestCount} guest`)
            }
    
            //ALERT IF 0 OR MULTIPLE GUESTS
            else{
                window.alert(`${matchingArea} currently has ${guestCount} guests`)
            }

        }
    }
)