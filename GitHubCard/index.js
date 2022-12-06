import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'TheLogan2019'];

for (let i = 0; i < followersArray.length; i++) {
  getGitCard(followersArray[i]);
}

function getGitCard(username){
  axios.get(`https://api.github.com/users/${username}`)
  .then(resp => {
    document.querySelector('.cards').appendChild(githubCard(resp.data));
  })
  .catch(err => console.error(err))
}


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/



function githubCard(gitInfo) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const login = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  login.classList.add('username');  

  img.src = gitInfo.avatar_url;
  img.alt = "github user";
  name.textContent = gitInfo.name;
  login.textContent = gitInfo.login;
  location.textContent = gitInfo.location;
  profile.textContent = "profile";
  profileLink.textContent = "Link to profile";
  profileLink.href = gitInfo.html_url;
  followers.textContent = `Followers: ${gitInfo.followers}`;
  following.textContent = `Following: ${gitInfo.following}`;
  bio.textContent = gitInfo.bio;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(login);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}



