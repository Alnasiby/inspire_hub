// Load gratitude entries when page loads
window.onload = loadGratitude;

function saveGratitude() {
    let gratitudeInput = document.getElementById('gratitudeInput').value;
    if (gratitudeInput.trim() === '') return;  // Prevent empty input

    let gratitudeList = document.getElementById('gratitudeList');

    // Create list item
    let li = document.createElement('li');
    li.innerHTML = `${gratitudeInput} <button class="delete-btn" onclick="removeGratitude(this)">❌</button>`;

    gratitudeList.appendChild(li);
    saveEntries();  // Save to local storage
    document.getElementById('gratitudeInput').value = '';  // Clear input field
}

function removeGratitude(button) {
    let li = button.parentElement;
    li.remove();
    saveEntries();  // Update local storage
}

// **Save gratitude entries in localStorage**
function saveEntries() {
    let entries = [];
    document.querySelectorAll("#gratitudeList li").forEach(li => {
        entries.push(li.innerText.replace("❌", "").trim());
    });

    localStorage.setItem('gratitude_entries', JSON.stringify(entries));
}

// **Load gratitude entries from localStorage**
function loadGratitude() {
    let savedEntries = localStorage.getItem('gratitude_entries');
    if (savedEntries) {
        let gratitudeList = document.getElementById('gratitudeList');
        gratitudeList.innerHTML = "";  // Clear existing list

        JSON.parse(savedEntries).forEach(entry => {
            let li = document.createElement('li');
            li.innerHTML = `${entry} <button class="delete-btn" onclick="removeGratitude(this)">❌</button>`;
            gratitudeList.appendChild(li);
        });
    }
}

function goBack() {
    window.location.href = "index.html";
}
