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
        { id: 10, name: "ziplines"},
        { id: 11, name: "hotel"},
        { id: 12, name: "restaurant"},
        { id: 13, name: "office park"},
        { id: 14, name: "children play areas"},
        { id: 15, name: "food vendors"}
    ],

    areaServices: [
        { id: 1, areaID: 1, serviceID: 11},
        { id: 2, areaID: 1, serviceID: 12},
        { id: 3, areaID: 1, serviceID: 5},
        { id: 4, areaID: 1, serviceID: 7},
        { id: 5, areaID: 1, serviceID: 8},
        { id: 6, areaID: 1, serviceID: 9},
        { id: 7, areaID: 2, serviceID: 4},
        { id: 8, areaID: 2, serviceID: 5},
        { id: 9, areaID: 2, serviceID: 6},
        { id: 10, areaID: 3, serviceID: 1},
        { id: 11, areaID: 3, serviceID: 2},
        { id: 12, areaID: 3, serviceID: 3},
        { id: 13, areaID: 4, serviceID: 3},
        { id: 14, areaID: 4, serviceID: 4},
        { id: 15, areaID: 5, serviceID: 13},
        { id: 16, areaID: 5, serviceID: 14},
        { id: 17, areaID: 5, serviceID: 7},
        { id: 18, areaID: 5, serviceID: 8},
        { id: 19, areaID: 5, serviceID: 9},
        { id: 20, areaID: 6, serviceID: 15},
        { id: 21, areaID: 6, serviceID: 4},
        { id: 22, areaID: 6, serviceID: 5},
        { id: 23, areaID: 6, serviceID: 10}
    ],
  
    areas: [
        { id: 1, name: "The Lodge"},
        { id: 2, name: "Lost Wolf Hiking Trail"},
        { id: 3, name: "Chamfort River"},
        { id: 4, name: "Gander River"},
        { id: 5, name: "The Campgrounds"},
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
        areaID: 1
        },
        {
        id: 4,
        name: "Arlie Day",
        areaID: 2
        },
        {
        id: 5,
        name: "Kaylin Coke",
        areaID: 4
        },
        {
        id: 6,
        name: "Finn Vernon",
        areaID: 5
        },
        {
        id: 7,
        name: "Gaby Simpkin",
        areaID: 5
        },
        {
        id: 8,
        name: "Baker St John",
        areaID: 5
        },
        {
        id: 9,
        name: "Juliana Kimball",
        areaID: 5
        },
        {
        id: 10,
        name: "Ocean Parkins",
        areaID: 1
        },
        {
        id: 11,
        name: "Tommie Henson",
        areaID: 6
        },
        {
        id: 12,
        name: "Bryan Wootton",
        areaID: 6
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
  