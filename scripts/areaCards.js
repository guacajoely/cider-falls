import { getAreas, getAreaServices, getServices} from "./database.js";
const allAreas = getAreas()
const allServices = getServices()
const allAreaServices = getAreaServices()

export const areaCards = () => {
    
    let HTML = ''

    for (const area of allAreas) {
        HTML += `<div id="area--${area.id}" class="area-card">
                    <h2 class="card-title">${area.name}</h2>`
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