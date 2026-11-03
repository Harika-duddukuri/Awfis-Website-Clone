let continueBtn =
document.getElementById("continueBtn");

continueBtn.addEventListener("click", function() {
    let phoneNumber =
    document.getElementById("phoneNumber").value.trim();
    let phoneError =
    document.getElementById("phoneError");
    phoneError.innerText = "";
    if (phoneNumber === "") {
        phoneError.innerText =
        "Please enter your phone number";
        return;
    }
    if (!/^[0-9]{10}$/.test(phoneNumber)) {
        phoneError.innerText =
        "Please enter a valid 10 digit number";
        return;
    }
    alert("Thank you! We will contact you soon.");
});

const workspaceSlides =
    document.querySelectorAll(".workspace-slide");

let workspaceIndex = 0;
function showWorkspaceSlide() {

    workspaceSlides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    workspaceSlides[workspaceIndex].classList.add("active");
}
setInterval(function() {
    workspaceIndex++;
    if (workspaceIndex >= workspaceSlides.length) {
        workspaceIndex = 0;
    }
    showWorkspaceSlide();
}, 4000);


const citySelect = document.getElementById("citySelect");
const locationSelect = document.getElementById("locationSelect");
const typeSelect = document.getElementById("typeSelect");
const spaceSearchBtn = document.getElementById("spaceSearchBtn");


const locations = {
    "Mumbai": ["Andheri", "Bandra", "Powai"],
    "Bengaluru": ["Koramangala", "Indiranagar", "Whitefield"],
    "Hyderabad": ["Hitech City", "Gachibowli"],
    "Pune": ["Baner", "Viman Nagar"],
    "Kolkata": ["Salt Lake", "Park Street"],
    "New Delhi": ["Aerocity", "Qutab", "Connaught Place"],
    "Noida": ["Sector 62", "Sector 132"],
    "Gurgaon": ["Golf Course Road", "MG Road", "Sohna Road"],
    "Chennai": ["Guindy", "OMR"],
    "Ahmedabad": ["SG Highway", "Prahlad Nagar"],
    "Kochi": ["Kakkanad", "Vyttila"],
    "Indore": ["Vijay Nagar"],
    "Bhubaneswar": ["Patia"],
    "Jaipur": ["Malviya Nagar"]

};

citySelect.addEventListener("change", function () {
    const selectedCity = citySelect.value;

    locationSelect.innerHTML =
        '<option value="">Location</option>';

    if (locations[selectedCity]) {
        locations[selectedCity].forEach(function (location) {

            const option = document.createElement("option");
            option.value = location;
            option.textContent = location;
            locationSelect.appendChild(option);
        });
    }
});

spaceSearchBtn.addEventListener("click", function () {

    const city = citySelect.value;
    const location = locationSelect.value;
    const type = typeSelect.value;

    if (city === "") {
        alert("Please select a city.");
        return;
    }
    if (location === "") {
        alert("Please select a location.");
        return;
    }
    if (type === "") {
        alert("Please select a workspace type.");
        return;
    }
    alert(
        "Searching for " +
        type +
        " in " +
        location +
        ", " +
        city
    );
});


const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {
        const faqItem = question.parentElement;
        faqItem.classList.toggle("active");

    });
});
document.addEventListener("DOMContentLoaded", function () {

    const networkCards =
        document.querySelectorAll(".network-card");

    networkCards.forEach(function (card) {
        card.addEventListener("click", function (event) {

            if (event.target.closest(".network-buttons a")) {
                return;
            }
            networkCards.forEach(function (otherCard) {

                if (otherCard !== card) {
                    otherCard.classList.remove("active");
                }
            });
            card.classList.toggle("active");
        });
    });
});