const profileName = document.querySelector(".name");
const profileJob = document.querySelector(".job");
const profilePic = document.querySelector(".profilePic");
const api = "https://api.github.com/user/72607039";
fetch(api)
 .then((data)=> data.json())
 .then((data)=> {
 profileName.innerHTML= data.login;
 profileJob.innerHTML= data.bio;
 profilePic.src= data.avatar_url;
 });