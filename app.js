/* ===============================
   COMMON CONFIG – UPDATE ONCE
================================ */

const API_URL = "https://script.google.com/macros/s/AKfycbwwzDvaWT4mWrFIBuYnMkhNSnQI4DiDN1sEArBK_BB8LC4aMxAu0bfdx2md2nP-frlzUQ/exec";

/* ===============================
   COMMON API HELPER
================================ */

function api(action, data = {}) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: action,
      ...data
    })
  }).then(res => res.json());
}

/* ===============================
   COMMON STORAGE HELPERS (OPTIONAL)
================================ */

function setSession(key, value) {
  localStorage.setItem(key, value);
}

function getSession(key) {
  return localStorage.getItem(key);
}

function clearSession() {
  localStorage.clear();
}

// ===== SOUND ENGINE =====
const Sound = {
  bg: new Audio("sounds/bg-question.mp3"),
  tick: new Audio("sounds/tick.mp3"),
  reveal: new Audio("sounds/reveal.mp3"),
  correct: new Audio("sounds/correct.mp3"),
  wrong: new Audio("sounds/wrong.mp3"),
  click: new Audio("sounds/click.mp3"),
  leaderboard: new Audio("sounds/leaderboard.mp3"),
  victory: new Audio("sounds/victory.mp3"),

  play(name, loop=false){
    const a = this[name];
    if(!a) return;
    a.pause();
    a.currentTime = 0;
    a.loop = loop;
    a.volume = 0.6;
    a.play().catch(()=>{});
  },

  stop(name){
    const a = this[name];
    if(!a) return;
    a.pause();
    a.currentTime = 0;
  },

  stopAll(){
    Object.values(this).forEach(a=>{
      if(a instanceof Audio){
        a.pause();
        a.currentTime = 0;
      }
    });
  }
};
