import { getServices } from "./database.js";
const allServices = getServices()

export const Services = () => {
    
    let HTML = `<ul class="services-list"><h2>Services</h2>`

    for (const service of allServices) {
        HTML += `<li id="service--${service.id}">${service.name}</li>`
    }

    HTML += "</ul>"

    return HTML
}