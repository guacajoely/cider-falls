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


//FUNCTION THAT LOOPS THROUGH THE areaService ARRAY AND GRAB EACH AREA WITH THAT SERVICE AND THROW IT IN AN ARRAY
const createMatchingAreasArray = (primaryKey, arrayOfServices) => {

    const matchedAreaIDs = []
    for (const object of arrayOfServices){
        if (primaryKey === object.serviceID){
            matchedAreaIDs.push(object.areaID)
        }
    }

return matchedAreaIDs
}

//FUNCTION THAT LOOPS THROUGH OUR ARRAY OF MATCHED AREAS AND FIND THE MATCHING NAMES
    const findAreaNames = (arrayOfAreaIDs, arrayOfAllAreas) => {
    
    const matchedAreaNames = []
    for(const areaID of arrayOfAreaIDs){
        const matchedAreaObject = arrayOfAllAreas.find(item => item.id === areaID);
        matchedAreaNames.push(matchedAreaObject.name)
    }
    return matchedAreaNames
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
            const matchedAreaIDs = createMatchingAreasArray(primaryKeyOfArea, allAreaServices)

            //LOOP THROUGH THE matchedAreaIDs ARRAY WE JUST MADE AND FIND THE MATCHING NAMES
            const matchedAreaNames = findAreaNames(matchedAreaIDs, allAreas)

            //USE NAME OF THE SERVICE CLICKED IN THE ALERT (without having to loop through the array of services)
            const serviceName = itemClicked.innerText 

            //ALERT IF ONLY ONE AREA
            if(matchedAreaNames.length < 2){
            window.alert(`${matchedAreaNames[0]} offers ${serviceName}`)
            }

            //ALERT IF 2+ AREAS
            else{
            const matchedAreasText = matchedAreaNames.join(", ").replace(/, ((?:.(?!, ))+)$/, ' and $1');
            window.alert(`${matchedAreasText} offer ${serviceName}`)
            }

        }
    }
)