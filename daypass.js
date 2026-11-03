const cityFilter = document.getElementById("cityFilter");
const localityFilter = document.getElementById("localityFilter");
const typeFilter = document.getElementById("typeFilter");
const workspaceCards = document.querySelectorAll(".workspace-card");


function filterCards() {

    const selectedCity = cityFilter.value;
    const selectedLocality = localityFilter.value;
    const selectedType = typeFilter.value;

    workspaceCards.forEach(function (card) {

        const cardCity = card.getAttribute("data-city");
        const cardLocality = card.getAttribute("data-locality");
        const cardType = card.getAttribute("data-type");

        const cityMatch =
            selectedCity === "all" ||
            selectedCity === cardCity;

        const localityMatch =
            selectedLocality === "all" ||
            selectedLocality === cardLocality;

        const typeMatch =
            selectedType === "all" ||
            selectedType === cardType;

        if (cityMatch && localityMatch && typeMatch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

cityFilter.addEventListener("change", function () {
    filterCards();

});

localityFilter.addEventListener("change", function () {
    filterCards();
});

typeFilter.addEventListener("change", function () {
    filterCards();

});

const bookButtons = document.querySelectorAll(".book-btn");
bookButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Thank you! Your Day Pass booking request has been received.");

    });
});