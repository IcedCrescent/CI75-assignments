/**
 * @type {HTMLFormElement}
 */
const addForm = document.querySelector("#add-form");
/**
 * @type {HTMLFormElement}
 */
const searchForm = document.querySelector("#search-form");

/**
 * @type {HTMLButtonElement}
 */
const deleteDuplicateBtn = document.querySelector("#delete-duplicate-btn");

/**
 * @type {HTMLDivElement}
 */
const contactList = document.querySelector(".contact-list");

/**
 * @typedef {Object} Contact 
 * @property {string} name the name of the contact
 * @property {number} phone the phone number of the contact
 */
/**
 * @type {Contact[]}
 */
const contacts = [
    {
        name: "Trung",
        phone: "0925530234"
    },
    {
        name: "Alice",
        phone: "2341234567"
    },
    {
        name: "Tung",
        phone: "0876230878"
    },
];

addForm.addEventListener("submit", addContact);
searchForm.addEventListener("submit", searchContacts);
deleteDuplicateBtn.addEventListener("click", removeDuplicates);

/**
 * Hanlde adding name and phone number to the contact list
 * @param {SubmitEvent} ev 
 */
function addContact(ev) {
    ev.preventDefault();
    const {name, phone} = ev.target.elements;

    if (!name.value.trim() || !phone.value.trim()) {
        alert("Name or phone can't be empty");
        return;
    }

    contacts.push({
        name: name.value.trim(),
        phone: phone.value.trim()
    });
    name.value = "";
    phone.value = "";
    renderContacts();
}

/**
 * Render the given contracts array to HTML
 * @param {Contact[]} data the contacts data to be rendered
 */
function renderContacts(data = contacts) {
    // Clear the contact list first
    contactList.innerHTML = "";

    if (data.length == 0) {
        return;
    }

    let htmlString = "";
    for (const contact of data) {
        htmlString +=
        `<div class="contact">
        <span class="name">${contact.name}</span>
        <span class="phone">${contact.phone}</span>
    </div>`;
    }
    contactList.innerHTML = htmlString;
}

/**
 * Handle searching contracts by name or phone number
 * @param {SubmitEvent} ev 
 */
function searchContacts(ev) {
    ev.preventDefault();
    const {search} = ev.target.elements;
    
    if (!search.value.trim()) {
        renderContacts();
        return;
    }

    const searchValue = search.value.trim();

    const result = contacts.filter(c => c.name.includes(searchValue) || c.phone.includes(searchValue));

    renderContacts(result);
}

/**
 * Handle removing contacts that have the same phone number, keep the first contact only
 * @param {MouseEvnet} ev 
 */
function removeDuplicates(ev) {
    ev.preventDefault();
    
    // Set là kiểu dữ liệu chỉ chứa giá trị không trùng nhau
    const seen = new Set();
    // Lọc số đt trùng, nếu chưa có trong set thì cho vào set, nếu có rồi thì bỏ qua 
    // (chỉ chứa số đầu tiên, các số trùng phía sau bị loại bỏ)
    const unique = contacts.filter(contact => {
        let phone = contact.phone;
        return seen.has(phone) ? false : seen.add(phone);
    });
    contacts.length = 0;
    contacts.push(...unique);
    renderContacts();
}