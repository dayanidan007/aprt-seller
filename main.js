
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y")
    let IndoorPlumbing = $("#in-plum")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate,IndoorPlumbing,parking)
    renderApts(relevantApts)
})

const source = $('#aprt-template').html();
const template = Handlebars.compile(source);

const renderApts = function (data) {
    $("#results").empty()
    const newHTML = template({aprtmentss: data});
    console.log(newHTML)
    $('#results').append(newHTML);
    }


renderApts(apartments) //renders apartments when page loads