// //Age auto calculation
// document.addEventListener("DOMContentLoaded", function () {
//     const birthdate = new Date("1990-07-17");
//     const today = new Date();
//     const ageInMilliseconds = today - birthdate;
//     const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
//     const ageElement = document.getElementById("age");
//     ageElement.textContent = Math.floor(ageInYears);
// });

//Open CV File
document.getElementById("open-cv-btn").addEventListener("click", function () {
    var pdfPath = "assets/Resume- Meishar Tal.pdf";
    window.open(pdfPath, "_blank");
});
