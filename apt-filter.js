
const must = (radio) => radio.filter(rb => rb.checked).length

const findRelevantApts = function (address, minPrice, maxPrice, minRooms, maxRooms, immediate,IndoorPlumbing,parking) {
    let relevantApts = apartments.filter(a =>
        a.address.toLowerCase().includes(address.toLowerCase() || "") &&
        a.price >= (minPrice || 0) &&
        a.price <= (maxPrice || a.price) &&
        a.rooms >= (minRooms || 0) &&
        a.rooms <= (maxRooms || a.rooms)&&
        a.IndoorPlumbing == true &&
        a.parking == true
    )

    immediate = !immediate[0].checked
    return immediate ? relevantApts : relevantApts.filter(a => (a.immediate)) 

}