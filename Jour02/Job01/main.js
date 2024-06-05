const userArray = [
    { firstname: 'Alice', lastName: 'Dupont', isActive: true},
    { firstname: 'Bob', lastName: 'Martin', isActive: false},
    { firstname: 'Charlie', lastName: 'Durand', isActive: true},
    { firstname: 'Diana', lastName: 'Leclerc', isActive: false},
    { firstname: 'Eve', lastName: 'Lambert', isActive: true}
];

function renderUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    userArray.forEach((user, index) => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user ' + (user.isActive ? 'active' : 'inactive');
        userDiv.textContent = `${user.firstname} ${user.lastName}`;
        userDiv.addEventListener('click', () => toggleUserStatus(index));
        userList.appendChild(userDiv);
    });
}

function toggleUserStatus(index) {
    userArray[index].isActive = !userArray[index].isActive;
    renderUsers();
}

renderUsers();
