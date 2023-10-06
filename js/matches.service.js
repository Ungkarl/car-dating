// Importerer nødvendige moduler og funktioner
import service from "./data.service.js";
import { favoritesTmpl } from "./templates.js";
import suggestion from "../js/suggestion.service.js";


const matchesList = {};


matchesList.init = async () => {

  const matchesContainer = document.querySelector('.liked-profiles-container');
  const suggestionContainer = document.querySelector('.suggestion'); 
  const searchInput = document.querySelector('.search-match');

  // Funktion til at opdatere visningen af likede profiler
  const renderMatches = (matches) => {
    matchesContainer.innerHTML = '';

    if (matches.length !== 0) {
      matches.forEach((match) => {
        matchesContainer.insertAdjacentHTML('beforeend', favoritesTmpl(match));
      });
    }
  };

  const addMatch = (suggestionId) => {
    const suggestionToAdd = suggestions.find((suggestion) => suggestion.ID == suggestionId);
    tempoaryMatches.push(suggestionToAdd);
    renderMatches(tempoaryMatches);
    suggestion.init();
    saveMatchesToLocalStorage(tempoaryMatches);
  };


  const removeMatch = (suggestionId) => {
    const indexToRemove = tempoaryMatches.findIndex((match) => match.ID == suggestionId);
    if (indexToRemove !== -1) {
      tempoaryMatches.splice(indexToRemove, 1);
      renderMatches(tempoaryMatches);
      saveMatchesToLocalStorage(tempoaryMatches);
    }
  };


  const saveMatchesToLocalStorage = (matches) => {
    localStorage.setItem('likedProfiles', JSON.stringify(matches));
  };


  const loadMatchesFromLocalStorage = () => {
    const savedMatchesJSON = localStorage.getItem('likedProfiles');
    return savedMatchesJSON ? JSON.parse(savedMatchesJSON) : [];
  };

  const suggestions = await service.getAccounts();


  suggestionContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('like-btn')) {
      const suggestionId = event.target.getAttribute('id');
      addMatch(suggestionId);
    }
    else if (event.target.classList.contains('reject-btn')) {
      suggestion.init();
    }
  });


  matchesContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-liked')) {
      const suggestionId = event.target.getAttribute('id');
      removeMatch(suggestionId);
    }
  });


  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const matches = document.querySelectorAll('.liked-profile')
    matches.forEach(match => {
      const matchNameElement = match.querySelector('.liked-profilename');
    
      if (matchNameElement) {
        const matchName = matchNameElement.textContent.toLowerCase();
    
        if (matchName.includes(searchText)) {
          match.style.display = 'flex';
        } else {
          match.style.display = 'none';
        }
      }
    });
  });


  const openMatch = (target) => {
    const matchToShow = suggestions.find((suggestion) => suggestion.ID == target);
    const matchToShowJSON = JSON.stringify(matchToShow);
    const url = `match.html?data=${encodeURIComponent(matchToShowJSON)}`;
    window.location.href = url;
  }


  matchesContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains('liked-profile')) {
      const matchID = event.target.getAttribute('id');
      openMatch(matchID)
    }
  })


  const tempoaryMatches = loadMatchesFromLocalStorage();
  renderMatches(tempoaryMatches);
};



export default matchesList;
