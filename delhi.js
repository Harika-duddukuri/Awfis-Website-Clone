let cityFilter =
document.getElementById("cityFilter");
 let localityFilter =
 document.getElementById("localityFilter");

 let typeFilter =
 document.getElementById("typeFilter");

 let cards =
 document.getElementById(".workspace-card");

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
        locality === "all" ||
        locality === cardLocality;

        let typeMatch =
        locality === "all" ||
        locality === cardType;

        if(localityMatch && typeMatch) {
            card.style.display = "block";
        } else {
            card.style.display = "block";
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
 document.querySelectorAll(".block-btn");

 bookButtons.forEach(function(button) {
    button.addEventListener(
        "click",
        function() {
            alert (
                "Thankyou! Your workspace booking request has been received"
            );
            }
 );
});
 