// Debugging: Check if script is loading
console.log("goal_tracker.js is loaded!");

function addGoal() {
    console.log("Button clicked!"); // Debugging

    let goalInput = document.getElementById('goalInput').value;
    if (goalInput.trim() === '') return;  // Prevent empty goals

    let goalList = document.getElementById('goalList');

    let li = document.createElement('li');
    li.innerHTML = `${goalInput} <button class="delete-btn" onclick="removeGoal(this)">X</button>`;

    // Clicking on a goal marks it as completed
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    goalList.appendChild(li);
    saveGoals();  // Save goals to local storage
    document.getElementById('goalInput').value = '';  // Clear input field
}

function removeGoal(button) {
    let li = button.parentElement;
    li.remove();
    saveGoals();  // Update local storage
}

function saveGoals() {
    let goalList = document.getElementById('goalList').innerHTML;
    localStorage.setItem('goals', goalList);
}

function loadGoals() {
    let savedGoals = localStorage.getItem('goals');
    if (savedGoals) {
        document.getElementById('goalList').innerHTML = savedGoals;

        // Reattach event listeners after loading
        let listItems = document.querySelectorAll("#goalList li");
        listItems.forEach((li) => {
            li.addEventListener('click', function () {
                li.classList.toggle('completed');
            });
        });
    }
}

function goBack() {
    window.location.href = "index.html";
}

// Load goals on page load
window.onload = loadGoals;
