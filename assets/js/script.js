const API_KEY = "6nTJwweVmWFGeFWnQ0t-Gsui4eY";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

// https://ci-jshint.herokuapp.com/api?api_key=6nTJwweVmWFGeFWnQ0t-Gsui4eY Check if the key is active

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;
    
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