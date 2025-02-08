// Load goals when page loads
window.onload = loadGoals;

function addGoal() {
    let goalInput = document.getElementById('goalInput').value;
    if (goalInput.trim() === '') return;  // Prevent empty goals

    let goalList = document.getElementById('goalList');

    // Create list item
    let li = document.createElement('li');
    li.innerHTML = `${goalInput} <button class="delete-btn" onclick="removeGoal(this)">X</button>`;

    // Clicking on a goal marks it as completed
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
        saveGoals();  // Save updated goals when toggled
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

// **Save goals in localStorage**
function saveGoals() {
    let goals = [];
    document.querySelectorAll("#goalList li").forEach(li => {
        goals.push({ 
            text: li.innerText.replace("X", "").trim(),  // Save text
            completed: li.classList.contains("completed") // Save completion status
        });
    });

    localStorage.setItem('goals', JSON.stringify(goals));  // Store as JSON
}

// **Load goals from localStorage**
function loadGoals() {
    let savedGoals = localStorage.getItem('goals');
    if (savedGoals) {
        let goalList = document.getElementById('goalList');
        goalList.innerHTML = "";  // Clear existing list

        JSON.parse(savedGoals).forEach(goal => {
            let li = document.createElement('li');
            li.innerHTML = `${goal.text} <button class="delete-btn" onclick="removeGoal(this)">X</button>`;
            
            // Restore completion status
            if (goal.completed) li.classList.add("completed");

            li.addEventListener('click', function () {
                li.classList.toggle('completed');
                saveGoals();  // Save updated goals when toggled
            });

            goalList.appendChild(li);
        });
    }
}

function goBack() {
    window.location.href = "index.html";
}
