const apiKey = "Rozk1lDh49SdTqjtdWi0R65Bke0";
const apiUrl = "https://ci-jshint.herokuapp.com/api";
// ?api_key=Rozk1lDh49SdTqjtdWi0R65Bke0
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function postForm(e) {
    const form = new FormData(document.getElementById("checksform"));

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Authorization": apiKey,
        },
        body: form,
    })
}

async function getStatus(e) {
    const queryString = `${apiUrl}?api_key=${apiKey}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {

    let heading = "API Key Status";
    let results = `<div>Your key is valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;

    resultsModal.show();
}
