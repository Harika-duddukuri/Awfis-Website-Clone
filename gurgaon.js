let cityFilter =
document.getElementById("cityFilter");

let localityFilter =
document.getElementById("localityFilter");

let typeFilter =
document.getElementById("typeFilter");

let cards =
document.querySelectorAll(".workspace-card");

function filterCards() {
    let locality =
    localityFilter.value;

    let type =
    typeFilter.value;

    cards.forEach(function(card) {
        let cardLocality =
        card.getAttribute("data-locality");

        let cardType =
        card.getAttribute("data-type");

        let localityMatch =
        type === "all" ||
        type === cardLocality;

        let typeMatch =
        type === "all" ||
        type === cardType;

        if (localityMatch && typeMatch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

localityFilter.addEventListener(
    "change",
    filterCards
);

typeFilter.addEventListener(
    "change",
    filterCards
);

let bookButtons =
document.querySelectorAll(".book-btn");

bookButtons.forEach(function(button) {
    button.addEventListener(
        "click",
        function() {
            alert(
                "Thankyou! Your workspace booking request has benn received."
            );
        }
    );
});