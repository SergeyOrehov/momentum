import "./sass/owfont-regular.scss";
import "./sass/main.scss";

const { playListArr } = require("./js/playListArr");
const { dataQuotes } = require("./js/data.js");
const time = document.querySelector(".time");
const dateApp = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const greetingContainer = document.querySelector(".greeting-container");
const footer = document.querySelector(".footer");
const weather = document.querySelector(".weather");
const todo = document.querySelector(".todo");
const myName = document.querySelector(".myName");
const body = document.getElementById("body");
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const city = document.querySelector(".city");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");
const audio = new Audio();
const play = document.querySelector(".play");
const playPrev = document.querySelector(".play-prev");
const playNext = document.querySelector(".play-next");
const playList = document.querySelector(".play-list");
const background = document.querySelector(".background");
const backgroundList = document.querySelector(".background-list");
let listSource = backgroundList.querySelectorAll(".background-list_item");
let backgroundActive = listSource[0].textContent;
city.value = "Minsk";
let isPlay = false;
let numSong = 0;
const greetingTranslation = {
  "ru-mor": "Доброe",
  "ru-day": "Добрый",
  "ru-nig": "Доброй",
  en: "Good",
};
const languagesItems = document.querySelectorAll(".languages-list__item");
const languages = document.querySelector(".languages");
const languagesList = document.querySelector(".languages-list");
const player = document.querySelector(".player");
let currentTimeSongs = 0;
const soundVolume = document.querySelector(".sound-volume");
const buttonVolume = document.querySelector(".play-volume");
const audioTile = document.querySelector(".audio-title");
audioTile.textContent = playListArr[0].title;
const playerTime = document.querySelector(".player-time");
const playerCurrentTime = document.querySelector(".player-currentTime");
playerTime.textContent = "0:39";
playerCurrentTime.textContent = 0;
const durationPlayer = document.querySelector(".duration-player");
playListArr.forEach((item) => {
  createLi(item);
});
const buttonTrackList = document.querySelectorAll(".track-button");
const settingsItems = document.querySelectorAll(".switch");
const settingsList = document.querySelector(".settings-list");
const buttonLanguage = document.querySelector(".button-language");
const buttonBackground = document.querySelector(".button-background");
const tagsBackground = document.querySelector(".tags-background");
const tagsBackgroundItems = document.querySelectorAll(".tags-background__item");
const btnFlickr = document.querySelector(".btn-Flickr");
const btnUnsplash = document.querySelector(".btn-Unsplash");
let currentTag = "nature";
let numQuote = 0;

let state = {
  language: "ru",
  "switch-time": time,
  "switch-date": dateApp,
  "switch-greeting": greetingContainer,
  "switch-quote": footer,
  "switch-weather": weather,
  "switch-audio": player,
  "switch-todolist": todo,
  "Unsplash API": getLinkToImage,
  "Flickr API": getLinkToImageFlickr,
};

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);
document.addEventListener("DOMContentLoaded", getWeather);

btnFlickr.addEventListener("click", () => {
  tagsBackground.classList.toggle("tags-visible");
});
btnUnsplash.addEventListener("click", () => {
  tagsBackground.classList.toggle("tags-visible");
});

tagsBackground.addEventListener("click", (event) => {
  let current = event.target.closest(".tags-background__item");
  tagsBackgroundItems.forEach((item) => {
    item.querySelector(".jackdaw").classList.remove("selected");
    if (current.textContent == item.textContent) {
      item.querySelector(".jackdaw").classList.add("selected");
      currentTag = current.textContent;
    }
  });
  backgroundActive == "Unsplash API"
    ? getLinkToImage(currentTag)
    : getLinkToImageFlickr(currentTag);
});

function settingsChange(elem) {
  for (let item in state) {
    if (elem == item) {
      state[item].classList.toggle("visible");
    }
  }
}

function showTime() {
  const date = new Date();
  let region;
  state.language == "ru" ? (region = "ru-Ru") : "en-Br";
  const currentTime = date.toLocaleTimeString(region);
  setTimeout(showTime, 1000);
  time.textContent = currentTime;
  showDate(region);
}

function showDate(region) {
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString(region, options);
  dateApp.textContent = currentDate;
}

function getTimeOfDay(language) {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours >= 0 && hours < 6) {
    language == "ru" ? (timeOfDay = "ночи") : (timeOfDay = "night");
  } else if (hours >= 6 && hours < 12) {
    language == "ru" ? (timeOfDay = "утро") : (timeOfDay = "morning");
  } else if (hours >= 12 && hours < 18) {
    language == "ru" ? (timeOfDay = "день") : (timeOfDay = "afternoon");
  } else {
    language == "ru" ? (timeOfDay = "вечер") : (timeOfDay = "evening");
  }
  if (hours >= 0 && hours < 6)
    greeting.textContent = `${greetingTranslation[language]} ${timeOfDay}`;
  return timeOfDay;
}

function getLocalStorage() {
  if (localStorage.getItem("myName")) {
    myName.value = localStorage.getItem("myName");
  }
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
}

function setLocalStorage() {
  localStorage.setItem("myName", myName.value);
  localStorage.setItem("city", city.value);
}

function getRandomNum() {
  let bgNum = 1 + Math.floor(Math.random() * 20);
  return bgNum;
}

function setBg(bgNum) {
  console.log("one");
  listSource[0].classList.add("item-active");
  let numImg = "";
  let timeOfDay = getTimeOfDay("en");
  if (bgNum < 10) {
    numImg = numImg + 0 + bgNum;
  } else {
    numImg = numImg + bgNum;
  }
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${numImg}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
  };
}

let randomNum = getRandomNum();

function getSlideNext() {
  if (backgroundActive == "The Rolling Scopes School") {
    if (randomNum == 20) {
      randomNum = 1;
    } else {
      randomNum++;
    }
    setBg(randomNum);
  } else if (backgroundActive == "Unsplash API") {
    getLinkToImage(currentTag);
  } else {
    getLinkToImageFlickr(currentTag);
  }
}

function getSlidePrev() {
  if (backgroundActive == "The Rolling Scopes School") {
    if (randomNum == 0) {
      randomNum = 20;
    } else {
      randomNum--;
    }
    setBg(randomNum);
  } else if (backgroundActive == "Unsplash API") {
    getLinkToImage(currentTag);
  } else {
    getLinkToImageFlickr(currentTag);
  }
}

async function getLinkToImage(dataBackground) {
  console.log("third");
  let timeOfDay = getTimeOfDay("en");
  const url = `https://api.unsplash.com/photos/random?query=${dataBackground}&client_id=UvhvAbs-46QHertW_43aBtFMLgoi9H6oMZZWAXqrkiM`;
  const res = await fetch(url);
  const data = await res.json();
  const img = new Image();
  img.src = data.urls.regular;
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
    body.style.backgroundSize = "cover";
  };
}

async function getLinkToImageFlickr(dataBackground) {
  console.log("second");
  let timeOfDay = getTimeOfDay("en");
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1c4e26e0ace2f0ca9e27b3c2b26ca4e9&tags=${dataBackground}&extras=url_l&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  let randomNumFlickr = Math.floor(Math.random() * 100);
  const img = new Image();
  img.src = data.photos.photo[randomNumFlickr].url_l;
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
    body.style.backgroundSize = "cover";
  };
}

async function getWeather() {
  if (!city.value)
    alert(
      "Выводятся данные города Минск, заполните поле ввода названия города"
    );
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${
    city.value ? city.value : "Minsk"
  }&lang=${state.language}&appid=c252e54d54de12924451c52d0fd76a2f&units=metric`;
  const res = await fetch(url);
  if (res.status >= 400) {
    alert("Введите корректное название города");
    alert(
      "Выводятся данные о погоде с учетом предыдущего корректного ввода данных "
    );
  }
  const data = await res.json();
  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

function randomQuotes() {
  numQuote = Math.floor(Math.random() * dataQuotes.length);
  quote.textContent = `"${dataQuotes[numQuote][state.language].text}"`;
  author.textContent = `${dataQuotes[numQuote][state.language].author}`;
}

function createLi(item) {
  let li = document.createElement("li");
  li.innerHTML = `
  <button id=${item.id} class="track-button player-icon"></button>
  <p class="track-title"> ${item.title}</p>
  `;
  li.classList.add("track-item");
  playList.appendChild(li);
}

function playAudio(id) {
  if (id) {
    audio.src = playListArr[id].src;
    numSong = id;
    audio.currentTime = 0;
  } else {
    audio.src = playListArr[numSong].src;
    audio.currentTime = currentTimeSongs;
  }
  audio.play();
  setInterval(() => {
    const progressBar = player.querySelector(".progress");
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    playerTime.textContent = getTimeCodeFromNum(audio.duration);
    playerCurrentTime.textContent = getTimeCodeFromNum(audio.currentTime);
    audioTile.textContent = playListArr[numSong].title;
  }, 500);

  isPlay = true;
  audio.addEventListener("ended", playNextChange);
}

function playSongs(idSong) {
  if (isPlay && play.classList.contains("pause")) {
    currentTimeSongs = audio.currentTime;
    audio.pause();
    play.classList.remove("pause");
    isPlay = false;
    buttonTrackList.forEach((item) => {
      item.classList.remove("pause");
    });
  } else if (typeof idSong == "number") {
    playAudio(idSong);
    play.classList.add("pause");
  } else {
    playAudio();
    play.classList.add("pause");
    buttonTrackList[numSong].classList.add("pause");
  }
}

function changeSongTrack(currentSong) {
  buttonTrackList.forEach((item) => {
    if (item.id == currentSong.id && !isPlay) {
      item.classList.add("pause");
      playSongs(item.id);
    } else if (
      item.id == currentSong.id &&
      isPlay &&
      currentSong.classList.contains("pause")
    ) {
      item.classList.remove("pause");
      playSongs();
    } else if (
      item.id == currentSong.id &&
      isPlay &&
      !item.classList.add("pause")
    ) {
      item.classList.add("pause");
      playAudio(item.id);
    } else {
      item.classList.remove("pause");
    }
  });
}

function playNextChange() {
  if (numSong == playListArr.length - 1) {
    numSong = 0;
  } else {
    numSong++;
  }
  currentTimeSongs = 0;
  playAudio();
  play.classList.add("pause");
  buttonTrackList.forEach((item) => {
    item.classList.remove("pause");
  });
  buttonTrackList[numSong].classList.add("pause");
}

function playPrevChange() {
  if (numSong == 0) {
    numSong = playListArr.length - 1;
  } else {
    numSong--;
  }
  currentTimeSongs = 0;
  playAudio();
  play.classList.add("pause");
}

function changeVolume(e) {
  const sliderWidth = window.getComputedStyle(soundVolume).width;
  let newVolume = e.offsetX / parseInt(sliderWidth);
  if (newVolume < 0) newVolume = 0;
  if (newVolume > 1) newVolume = 1;
  audio.volume = newVolume;
}

randomQuotes();
setBg(randomNum, "en");
showTime();
getTimeOfDay(state.language);

buttonVolume.addEventListener("click", () => {
  audio.muted = !audio.muted;
  buttonVolume.classList.toggle("mute");
});

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;
  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

backgroundList.addEventListener("click", (event) => {
  let current = event.target.closest(".background-list_item");
  listSource.forEach((item) => {
    item.querySelector(".jackdaw").classList.remove("selected");
    if (item.textContent == current.textContent) {
      backgroundActive = current.textContent;
      item.querySelector(".jackdaw").classList.add("selected");
      if (backgroundActive == "The Rolling Scopes School") {
        setBg(randomNum);
      } else if (backgroundActive == "Unsplash API") {
        getLinkToImage();
      } else {
        getLinkToImageFlickr();
      }
    }
  });
});

languagesList.addEventListener("click", (event) => {
  let current = event.target.closest(".languages-list__item");
  languagesItems.forEach((item) => {
    item.querySelector(".jackdaw").classList.remove("selected");
    if (current.id == item.id) {
      state.language = item.id;
      getTimeOfDay(state.language);
      getWeather();
      item.querySelector(".jackdaw").classList.add("selected");
      quote.textContent = `"${dataQuotes[numQuote][state.language].text}"`;
      author.textContent = `${dataQuotes[numQuote][state.language].author}`;
    }
  });
});

durationPlayer.addEventListener("click", (e) => {
  const timelineWidth = window.getComputedStyle(durationPlayer).width;
  const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
  audio.currentTime = timeToSeek;
});

play.addEventListener("click", playSongs);
playPrev.addEventListener("click", playPrevChange);
playNext.addEventListener("click", playNextChange);
changeQuote.addEventListener("click", randomQuotes);
city.addEventListener("change", getWeather);
slideNext.addEventListener("click", getSlideNext);
slidePrev.addEventListener("click", getSlidePrev);
soundVolume.addEventListener("click", changeVolume);
playList.addEventListener("click", (event) => {
  const currentSong = event.target;
  changeSongTrack(currentSong);
});

settingsList.addEventListener("change", (event) => {
  let current = event.target.closest(".switch");
  settingsItems.forEach((item) => {
    if (current.id == item.id) {
      settingsChange(current.id);
    }
  });
});

buttonLanguage.addEventListener("click", () => {
  languages.classList.toggle("setting-visible-elems");
  if (background.classList.contains("setting-visible-elems")) {
    background.classList.remove("setting-visible-elems");
  }
  if (tagsBackground.classList.contains("tags-visible")) {
    tagsBackground.classList.remove("tags-visible");
  }
});
buttonBackground.addEventListener("click", () => {
  background.classList.toggle("setting-visible-elems");
  if (languages.classList.contains("setting-visible-elems")) {
    languages.classList.remove("setting-visible-elems");
  }
  if (tagsBackground.classList.contains("tags-visible")) {
    tagsBackground.classList.remove("tags-visible");
  }
});

const btnAddTask = document.querySelector(".add-task");
const inputTask = document.querySelector(".text-task");
const inputTaskList = document.querySelector(".todo__list");
let numOfTask = 0;
let quantityItems = 0;

function getTask() {
  if (quantityItems == 10) return;
  let task = document.createElement("div");
  task.id = "task-" + `${numOfTask + 1}`;
  numOfTask++;
  task.innerHTML = `
  <p class = 'description'>${inputTask.value}</p>
  <input type ="checkbox" class="checkbox">
  <div class='delete'></div>
  `;
  inputTaskList.appendChild(task);
  inputTask.value = "";
  task.classList.add("todo-item");
  todo.style.bottom = "-140px";
  quantityItems++;
}
btnAddTask.addEventListener("click", getTask);

inputTaskList.addEventListener("click", (event) => {
  let current = event.target.closest(".delete");
  inputTaskList.querySelectorAll(".delete").forEach((item) => {
    if (current.closest(".todo-item").id == item.closest(".todo-item").id) {
      current.closest(".todo-item").remove();
      quantityItems--;
    }
  });
});

const settings = document.querySelector(".settings");

const settingBtn = document.querySelector(".setting-btn");

settingBtn.addEventListener("click", () => {
  settings.classList.toggle("settings-visible");
  languages.classList.toggle("show");
  background.classList.toggle("show");
  tagsBackground.classList.remove("tags-visible");
  languages.classList.remove("setting-visible-elems");
  background.classList.remove("setting-visible-elems");
});
