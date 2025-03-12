document.addEventListener("DOMContentLoaded", function () {
    const offerBoxes = document.querySelectorAll(".offer-box");
    
    offerBoxes.forEach(box => {
        const radio = box.querySelector("input[type='radio']");
        radio.addEventListener("change", function () {
            offerBoxes.forEach(b => {
                b.classList.remove("active");
                b.querySelector(".offer-content").style.display = "none";
            });

            box.classList.add("active");
            box.querySelector(".offer-content").style.display = "block";
        });
    });
});
