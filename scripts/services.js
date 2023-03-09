import { getServices, getAreaServices, getAreas } from "./database.js";
const allServices = getServices()
const allAreaServices = getAreaServices()
const allAreas = getAreas()

export const services = () => {
    
    let HTML = `<ul class="services-list"><h2>Services</h2>`

    for (const service of allServices) {
        HTML += `<li id="service--${service.id}">${service.name}</li>`
    }

    HTML += "</ul>"

    return HTML
}

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON A SERVICE?
        if (itemClicked.id.startsWith("service")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED SERVICE?
            const [,primaryKey] = itemClicked.id.split("--")
            const primaryKeyOfArea =parseInt(primaryKey)

            //LOOP THROUGH THE areaService ARRAY AND GRAB EACH AREA WITH THAT SERVICE AND THROW IT IN AN ARRAY
            const matchedAreaIDs = []
            for (const object of allAreaServices){
                if (primaryKeyOfArea === object.serviceID){
                    matchedAreaIDs.push(object.areaID)
                }
            }
            
            //LOOP THROUGH OUR ARRAY OF MATCHED AREAS AND FIND THE MATCHING NAMES
            const matchedAreaNames = []
            for(const areaID of matchedAreaIDs){
                const matchedAreaObject = allAreas.find(item => item.id === areaID);
                matchedAreaNames.push(matchedAreaObject.name)
            }

            //USE NAME OF THE SERVICE CLICKED IN THE ALERT
            const serviceName = itemClicked.innerText 

            //ALERT IF ONLY ONE AREA
            if(matchedAreaNames.length < 2){
            window.alert(`${matchedAreaNames[0]} offers ${serviceName}`)
            }

            else{
            const matchedAreasText = matchedAreaNames.join(", ").replace(/, ((?:.(?!, ))+)$/, ' and $1');
            window.alert(`${matchedAreasText} offer ${serviceName}`)
            }

        }
    }
)