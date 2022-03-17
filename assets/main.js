var username = document.getElementById("inputValue");

var btn = document.getElementById("btnSubmit")
btn.innerText = "Search";

btn.addEventListener('click', function() {
  displayUser();
})

var cardBg = document.getElementById("profileCard");
var uName = document.getElementById("userName");
var company = document.getElementById("companyName");
var workedIn = document.getElementById("workedIn");
var locationUser = document.getElementById("userLocation");
var iconLocation = document.getElementById("iconLocation");
var followersText = document.getElementById("followersText");
var followingText = document.getElementById("followingText");
var repoText = document.getElementById("repoText");
var followers = document.getElementById("totalFollowers");
var following = document.getElementById("totalFollowing");
var repos = document.getElementById("publicRepo");
var switchText = document.getElementById("switchText");

var isDarkTheme = true;

var toggleBtn = document.getElementById("toggleSwitch");
toggleBtn.addEventListener('click', function(){
  myFunction();
});

var profile =document.getElementById("profileCard");
profile.style.display = "none"

function addDynamicClass(addClass) {
  document.getElementById("userName").classList.add(addClass);
  document.getElementById("workedIn").classList.add(addClass);
  document.getElementById("userLocation").classList.add(addClass);
  document.getElementById("iconLocation").classList.add(addClass);
  document.getElementById("followersText").classList.add(addClass);
  document.getElementById("followingText").classList.add(addClass);
  document.getElementById("repoText").classList.add(addClass);
  document.getElementById("totalFollowers").classList.add(addClass);
  document.getElementById("totalFollowing").classList.add(addClass);
  document.getElementById("publicRepo").classList.add(addClass);
  document.getElementById("switchText").classList.add(addClass);
}

function removeDynamicClass(removeClass) {
  document.getElementById("userName").classList.remove(removeClass);
  document.getElementById("workedIn").classList.remove(removeClass);
  document.getElementById("userLocation").classList.remove(removeClass);
  document.getElementById("iconLocation").classList.remove(removeClass);
  document.getElementById("followersText").classList.remove(removeClass);
  document.getElementById("followingText").classList.remove(removeClass);
  document.getElementById("repoText").classList.remove(removeClass);
  document.getElementById("totalFollowers").classList.remove(removeClass);
  document.getElementById("totalFollowing").classList.remove(removeClass);
  document.getElementById("publicRepo").classList.remove(removeClass);
  document.getElementById("switchText").classList.remove(removeClass);
}

function myFunction() {
  if (isDarkTheme === true) {
    isDarkTheme = false;
    cardBg.style.background = "darkblue";
    cardBg.style.border = "2px solid yellow"
    addDynamicClass("darkTheme");
  } else {
    isDarkTheme = true;
    cardBg.style.background = "#fff";
    cardBg.style.border = "none"
    removeDynamicClass("darkTheme")
  }
}

function getUser(username) {
  var baseUrl = 'https://api.github.com/';
  return fetch(`${baseUrl}users/${username}`).then(function(response) {
    return response.json()
  })
}
function displayUser() {
  getUser(username.value).then(function(result) {
    console.log(result)
    if (result) {
      profile.style.display = "block"
      var avatar = document.getElementById("userImg");
      avatar.setAttribute("src", result.avatar_url);

      uName.innerText = result.name;

      company.innerText = result.company;

      locationUser.innerText = result.location;

      followers.innerText = result.followers;

      following.innerText = result.following;

      repos.innerText = result.public_repos;
    }
  })
}