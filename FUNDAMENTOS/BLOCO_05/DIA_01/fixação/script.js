let header = document.querySelector("#header-container");
header.style.backgroundColor = "green";

let footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "black";

let emergency = document.querySelector(".emergency-tasks");
emergency.style.backgroundColor = "pink";

let emergencyHeader = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emergencyHeader.length; i++) {
    emergencyHeader[i].style.backgroundColor = "purple";
}

let notEmergency = document.querySelector(".no-emergency-tasks");
notEmergency.style.backgroundColor = "yellow";

let notEmergencyHeader = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < emergencyHeader.length; i++) {
    notEmergencyHeader[i].style.backgroundColor = "black";
}

