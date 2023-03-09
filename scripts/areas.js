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

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON AN AREA CARD?
        if (itemClicked.id.startsWith("area")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED AREA?
            const [,primaryKey] = itemClicked.id.split("--")
            const primaryKeyOfArea =parseInt(primaryKey)

            //LOOP THROUGH THE GUESTS ARRAY AND COUNT EACH GUEST WITH A MATCHING AREAID
            let guestCount = 0
            for (const guest of allGuests){
                if (primaryKeyOfArea === guest.areaID){
                    guestCount++
                }
            }


            //GRAB THE AREA NAME FROM THE ARRAY OF AREAS USING THE ID
            let matchedAreaObject = allAreas.find(item => item.id === primaryKeyOfArea);
            const matchingArea = matchedAreaObject.name


            // INSERT INTO ALERT
            window.alert(`${matchingArea} currently has ${guestCount} guests`)

        }
    }
)