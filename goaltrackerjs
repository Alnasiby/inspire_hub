function addGoal() {
    let goalInput = document.getElementById('goalInput').value;
    if (goalInput.trim() === '') return;

    let goalList = document.getElementById('goalList');

    let li = document.createElement('li');
    li.innerHTML = `${goalInput} <button class="delete-btn" onclick="removeGoal(this)">X</button>`;
    
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    goalList.appendChild(li);
    saveGoals();
    document.getElementById('goalInput').value = '';
}

function removeGoal(button) {
    let li = button.parentElement;
    li.remove();
    saveGoals();
}

function saveGoals() {
    let goalList = document.getElementById('goalList').innerHTML;
    localStorage.setItem('goals', goalList);
}

function loadGoals() {
    let savedGoals = localStorage.getItem('goals');
    if (savedGoals) {
        document.getElementById('goalList').innerHTML = savedGoals;
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

// Load saved goals when the page loads
window.onload = loadGoals;
