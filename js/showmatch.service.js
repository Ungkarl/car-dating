import { showMatchTmpl } from "./templates.js";
import service from "./data.service.js";
  const suggestions = await service.getAccounts()

const urlParams = new URLSearchParams(window.location.search);
const matchToShowJSON = urlParams.get('data');
const profileContainer = document.querySelector('.profile-container')

if (matchToShowJSON) {
  const matchToShow = JSON.parse(decodeURIComponent(matchToShowJSON));
  if(profileContainer) {
    profileContainer.insertAdjacentHTML('beforeend', showMatchTmpl(matchToShow));
  }

  const closeProfile = document.querySelector('.close-profile')
  const removeMatch = document.querySelector('.reject-btn')


  closeProfile.addEventListener('click', () => {
    const url = `index.html`;
    window.location.href = url;
  })

  removeMatch.addEventListener('click', () => {
    
    const matchIdToRemove = matchToShow.ID;
  

    const likedProfilesJSON = localStorage.getItem('likedProfiles');
    const likedProfiles = likedProfilesJSON ? JSON.parse(likedProfilesJSON) : [];
  
    
    const matchIndexToRemove = likedProfiles.findIndex((match) => match.ID === matchIdToRemove);
  
    
    if (matchIndexToRemove !== -1) {
      likedProfiles.splice(matchIndexToRemove, 1);
  
    
      localStorage.setItem('likedProfiles', JSON.stringify(likedProfiles));
  
      
      const url = `index.html`;
      window.location.href = url;
    }
  });


  const openChat = (target) => {
  const matchToShow = suggestions.find((suggestion) => suggestion.ID == target);
  if (matchToShow) {
    const matchToShowJSON = JSON.stringify(matchToShow);
    const url = `chat.html?data=${encodeURIComponent(matchToShowJSON)}`;
    window.location.href = url;
  } 
}

const actionBtnsContainer = document.querySelector('.action-buttons')
actionBtnsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('chat-btn')) {
    const suggestionId = event.target.getAttribute('id');
    openChat(suggestionId);
  }
});
  
  
 
}
