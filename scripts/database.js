const database = {
    services: [
        { id: 1, name: "Rafting"},
        { id: 2, name: "canoeing"},
        { id: 3, name: "fishing"},
        { id: 4, name: "hiking"},
        { id: 5, name: "picnicking"},
        { id: 6, name: "rock climbing"},
        { id: 7, name: "lodging"},
        { id: 8, name: "parking"},
        { id: 9, name: "information"},
        { id: 10, name: "ziplines"}
    ],

    areaServices: [
        { id: 1, areaID: 1, serviceID: 1},
        { id: 2, areaID: 1, serviceID: 2},
        { id: 3, areaID: 1, serviceID: 3},
        { id: 4, areaID: 2, serviceID: 4},
        { id: 5, areaID: 2, serviceID: 5},
        { id: 6, areaID: 2, serviceID: 6},
        { id: 7, areaID: 3, serviceID: 7},
        { id: 8, areaID: 3, serviceID: 8},
        { id: 9, areaID: 3, serviceID: 9},
        { id: 10, areaID: 3, serviceID: 5},
        { id: 11, areaID: 4, serviceID: 3},
        { id: 12, areaID: 4, serviceID: 4},
        { id: 13, areaID: 5, serviceID: 7},
        { id: 14, areaID: 5, serviceID: 8},
        { id: 15, areaID: 5, serviceID: 9},
        { id: 16, areaID: 6, serviceID: 4},
        { id: 17, areaID: 6, serviceID: 5},
        { id: 18, areaID: 6, serviceID: 10}
    ],
  
    areas: [
        { id: 1, name: "Lodge"},
        { id: 2, name: "Lost Wolf Hiking Trail"},
        { id: 3, name: "Chamfort River"},
        { id: 4, name: "Gander River"},
        { id: 5, name: "Campgrounds"},
        { id: 6, name: "Pine Bluffs Trails"}
    ],

    guests: [
        {
        id: 1,
        name: "Jimbo Jenkins",
        areaID: 1
        },
        {
        id: 2,
        name: "Jenny Jenkins",
        areaID: 1
        },
        {
        id: 3,
        name: "John Smith",
        areaID: 3
        },
    ]
  }
  
  
  export const getServices = () => {
    return database.services.map(serviceObject => ({...serviceObject}))
  }
  
  export const getAreas = () => {
    return database.areas.map(areaObject => ({...areaObject}))
  }
  
  export const getGuests = () => {
    return database.guests.map(guestObject => ({...guestObject}))
  }

  export const getAreaServices = () => {
    return database.areaServices.map(Object => ({...Object}))
  }
  