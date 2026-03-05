const btn = document.getElementById("addGroup");
const container = document.getElementById("list__groups");

let count = 0;

btn.addEventListener("click", () => {
    count += 1;
    const section = document.createElement("div");

    section.classList.add("section");

    section.innerHTML = `
    <p>Rodzina ${count}</p>
    <input type="text" placeholder="Wypisz imie i nazwisko."/>
    <button type="button" class="addPersonBtn">+ Dodaj osobę</button>
    <hr>
    `;

    container.appendChild(section);
});

const group = document.querySelector("#list__groups");

group.addEventListener("click", (e) => {
    const btn = e.target.closest(".addPersonBtn");
    if(!btn) return;
    
    const section = btn.closest(".section");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Wypisz imie i nazwisko.";

    section.insertBefore(input, btn);
});