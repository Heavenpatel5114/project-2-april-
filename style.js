const users = [
    {id: 1, name: "John", age: "18", profession: "developer"},
    {id: 2, name: "Jack", age: "20", profession: "developer"},
    {id: 3, name: "Karen", age: "19", profession: "admin"}
  ];
  
  const cardsContainer = document.querySelector('.cards-container');
  
  function renderCards() {
    cardsContainer.innerHTML = '';
    users.forEach((user) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
        <p>Profession: ${user.profession}</p>
      `;
      cardsContainer.appendChild(card);
    });
  }
  
  renderCards();
  
  function filterCards() {
    const profession = document.getElementById('filter-profession').value;
    if (!profession) {
      alert('Please select a profession to filter');
      return;
    }
    const filteredUsers = users.filter((user) => user.profession === profession);
    renderFilteredCards(filteredUsers);
  }
  
  function renderFilteredCards(filteredUsers) {
    cardsContainer.innerHTML = '';
    filteredUsers.forEach((user) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
        <p>Profession: ${user.profession}</p>
      `;
      cardsContainer.appendChild(card);
    });
  }
  
  function addUser() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const profession = document.getElementById('profession').value;
    if (!name || !age || !profession) {
      alert('Please enter all fields to add a user');
      return}}