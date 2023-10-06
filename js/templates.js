export const suggestionsTmpl = (person) => `
                <img src="${person.picture}" alt="Portrait of person, whom you are to like or reject">
                <div class="profile-info">
                    <div class="profile-name-age"><p><ion-icon name="person"></ion-icon> ${person.name}, ${person.age}</p></div>

                    <div class="profile-city"><p><ion-icon name="home"></ion-icon> ${person.city}</p></div>

                    <div class="profile-job"><p><ion-icon name="hammer"></ion-icon> ${person.job}</p></div>

                    <div class="profile-currentcar"><p><ion-icon name="car-sport"></ion-icon> ${person.currentcar}</p></div>

                </div>

                <div class="action-buttons">
                    <div class="reject-btn"><img src="assets/dislike.png" alt="" class="reject-btn"></div>
                    <div class="like-btn" id="${person.ID}"><img src="assets/like.png" alt=""class="like-btn" id="${person.ID}"></div>

                </div>
`;

export const favoritesTmpl = (match) => `
<div class="liked-profile">

<div class="liked-profilepicture"><img src="${match.picture}" alt=""><p class="remove-liked" id="${match.ID}"><ion-icon name="person-remove" class="remove-liked" id="${match.ID}"></ion-icon></div>

<div class="liked-profilename"><p>${match.name}, ${match.age}</p></div>
<div class="overlay liked-profile" id="${match.ID}"</div>

</div>
`;

export const suggestionsTmpl2 = `         
                <div class="profile-info">
                    <div class="profile-name-age"><p><ion-icon name="person"></ion-icon>Ikke flere profiler</p></div>

                    <div class="profile-city"><p><ion-icon name="home"></ion-icon> Ikke flere profiler</p></div>

                    <div class="profile-job"><p><ion-icon name="hammer"></ion-icon> Ikke flere profiler</p></div>

                    <div class="profile-currentcar"><p><ion-icon name="car-sport"></ion-icon> Ikke flere profiler</p></div>

                </div>

            
`;

export const showMatchTmpl = (match) => `
<div class="profile">
<div class="profile-picturename-container"><div class="profile-picture"><img src="${match.picture}" alt=""></div><p>${match.name}, ${match.age}</p></div>
<div class="profile-description"><p>${match.description}</p></div>
<div class="action-buttons">
    <div class="reject-btn"><img src="assets/dislike.png" alt=""></div>
    <div class="chat-btn" id="${match.ID}"><ion-icon name="chatbubble-ellipses" id="${match.ID}" class="chat-btn"></ion-icon></div>

</div>
<div class="close-profile"><ion-icon name="close-outline"></ion-icon></div>
</div>



`;

export const chatTmpl = (match) => {
    const randomStatusNumber = Math.random();
    let statusClass = "";
    let status = "";
    if (randomStatusNumber < 0.5) {
      status = "Online";
      statusClass = "online";
    } else {
      status = "Offline";
      statusClass = "offline";
    }
    return `
      <div class="profile-picturename">
        <img src="${match.picture}" alt="">
        <p>${match.name}, ${match.age}</p>
      </div>
      <div class="status ${statusClass}">
        <p>${status}</p>
      </div>
    `;
  };
  
