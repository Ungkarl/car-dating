import service from "../js/data.service.js";
import { suggestionsTmpl, suggestionsTmpl2 } from "../js/templates.js"

const suggestion = {};

suggestion.init = async () => {
    const suggestionContainer = document.querySelector('.suggestion');
    const suggestions = await service.getAccounts();
    const likedIDs = Array.from(document.querySelectorAll('.liked-profile'));

    if (suggestionContainer) {
      
        const availableIndexes = [];

      
        for (let index = 1; index <= 50; index++) {
            if (!likedIDs.some(likedID => likedID.getAttribute('id') === index.toString())) {
                availableIndexes.push(index);
            }
        }

        
        if (availableIndexes.length > 0) {
            const randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
            const randomAccount = suggestions[randomIndex - 1]; 
            suggestionContainer.innerHTML = '';
            suggestionContainer.insertAdjacentHTML('beforeend', suggestionsTmpl(randomAccount));
        } else {
            console.log("Ingen flere tilgængelige forslag.");
            suggestionContainer.innerHTML = '';
            suggestionContainer.insertAdjacentHTML('beforeend', suggestionsTmpl2);
        }
    }
    const navBar = document.querySelector('.navbar')
const sideBar = document.querySelector('.side-bar')

navBar.addEventListener('click', (event) => {
  if (event.target.classList.contains('open-sidebar')) {
    sideBar.classList.toggle('sidebar-show')
    console.log('ye')
  }
})


sideBar.addEventListener('click', (event) => {
    if(event.target.classList.contains('close')) {
        sideBar.classList.remove('sidebar-show')
        console.log('hey')
    }
})
};

export default suggestion