let planetsName = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
// let planetsColor = ["grey", "yellow", "green", "orange", "blanchedalmond", "palegoldenrod", "lightseagreen", "blue"]

let mainSection = document.querySelector(".listPlanets");

for (let i = 0; i < planetsName.length; i++) {
    planet = document.createElement("div");
    planet.setAttribute("class", "planet")
    planet.classList.add(planetsName[i])
    // planet.style.backgroundColor = planetsColor[i]
    planet.style.margin = "5px"
    planet.textContent = planetsName[i]
    mainSection.appendChild(planet);
}