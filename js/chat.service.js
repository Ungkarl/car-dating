import { chatTmpl } from "./templates.js";

const urlParams = new URLSearchParams(window.location.search);
const matchToShowJSON = urlParams.get('data');

const profileContainer = document.querySelector('.chat-person-bar')

if(matchToShowJSON) {
    const matchToShow = JSON.parse(decodeURIComponent(matchToShowJSON));

    if (profileContainer) {
        profileContainer.insertAdjacentHTML('beforeend', chatTmpl(matchToShow));
    }
}