export default class Scores {
  constructor() {
    this.endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.id = "Bf6jsb0iOiep8n3zEeum";
    this.participants = [];
  }
  async getScores () {
    return await fetch(this.endpoint+this.id+'/scores/')
    .then((res) => res.json())
    .then((data) => ({error: false, participants: data.result}))
    .catch((error) => ({error: true, participants: this.participants}));
  }

  async addParticipant(name, score) {
    if(name && score && !isNaN(score) && typeof name === 'string'){
      return await fetch(this.endpoint+this.id+'/scores/', {
        method: 'POST',
        body: JSON.stringify({
          user: name,
          score: score
        }),
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then((res) => res.json())
      .then((msg) => ({error: false, msg: msg}))
      .catch((error) => ({error: true, msg: "Score could not be added"}));
    }else{
      return ({error: true, msg: 'Invalid name or score value'});
    }
  }

  displayScores() {
    this.getScores()
    .then((res) => {
        if(!res.error){
          this.participants = res.participants;
          const scoresDomList = document.querySelector('.scores-list');
          scoresDomList.innerHTML = '';
          this.participants.forEach((participant) => {
            scoresDomList.innerHTML += `<li>${participant.user}: ${participant.score}</li>`;
          });
        }
    });
  }
}