// const personalContent = document.getElementById("personalContent");
// const techContent = document.getElementById("techContent");
// const personalBtn = document.getElementById("personalBtn");
// const techBtn = document.getElementById("techBtn");

// personalBtn.onclick = function showPersonal () {
//     if (personalContent.style.display === "none") {
//         personalContent.style.display === "block"
//     } else {
//         personalContent.style.display === "none"
//     }
// }

// techBtn.onclick = function showTech () {
//     if (techContent.style.display === "none") {
//         techContent.style.display === "block"
//     } else {
//         techContent.style.display === "none"
//     }
// }

var personalButton = document.getElementById('personalBtn');

personalButton.onclick = function() {
    var personalContent = document.getElementById('personalContent');
    if (personalContent.style.display !== 'block') {
        personalContent.style.display = 'block';
    }
    else {
        personalContent.style.display = 'none';
    }
};

var techButton = document.getElementById('techBtn');

techButton.onclick = function() {
    var techContent = document.getElementById('techContent');
    if (techContent.style.display !== 'block') {
        techContent.style.display = 'block';
    }
    else {
        techContent.style.display = 'none';
    }
};