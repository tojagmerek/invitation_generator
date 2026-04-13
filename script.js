const btn = document.getElementById("addGroup");
const container = document.getElementById("list__groups");

let count = 0;

//Add Group

btn.addEventListener("click", () => {
    count += 1;
    const section = document.createElement("div");

    section.classList.add("section");

    section.innerHTML = `
    <p>Rodzina ${count}</p>
    <input type="text" class="person-input" placeholder="Wypisz imie i nazwisko."/>
    <button type="button" class="addPersonBtn">+ Dodaj osobę</button>
    <hr>
    <button type="button" class="deletePersonBtn">X</button>
    `;

    container.appendChild(section);
    updateSummary();
});

//Add Person In Group

const group = document.querySelector("#list__groups");

group.addEventListener("click", (e) => {
    if(e.target.closest(".addPersonBtn")) {
        const btn = e.target.closest(".addPersonBtn");
        const section = btn.closest(".section");
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Wypisz imie i nazwisko.";
        input.classList.add("person-input");

        section.insertBefore(input, btn);
        updateSummary();
        return;
    }
    
    if(e.target.closest(".deletePersonBtn")) {
        const deleteBtn = e.target.closest(".deletePersonBtn");
        const section = deleteBtn.closest(".section");
        section.remove();
        updateSummary(); 
        return;      
    }
});

//Show Summary info

function updateSummary() {
    const families = document.querySelectorAll(".section");
    const familyCount = families.length;

    const persons = document.querySelectorAll(".person-input");
    const personCount = persons.length;
    
    const InvChk = document.getElementById("InvChk");
    const InvVig = document.getElementById("InvVig");
    const InvThs = document.getElementById("InvThs");

    if (InvChk.checked) document.getElementById("summaryInvitations").textContent = familyCount;
    else document.getElementById("summaryInvitations").textContent = 0;

    if (InvVig.checked) document.getElementById("summaryVignette").textContent = personCount;
    else document.getElementById("summaryVignette").textContent = 0;

    if (InvThs.checked) document.getElementById("summaryThanks").textContent = personCount;
    else document.getElementById("summaryThanks").textContent = 0;
}

const btnChk = document.querySelectorAll(".picker__chk");

btnChk.forEach((chk) => {
    chk.addEventListener("click", updateSummary);
});