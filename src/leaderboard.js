export default class Scores {
  constructor() {
    this.endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.id = 'eGOybFZRVzRhxJ6bxsbj';
    this.participants = [];
  }

  async getScores() {
    const response = await fetch(`${this.endpoint + this.id}/scores/`)
      .then((res) => res.json())
      .then((data) => ({ error: false, participants: data.result }))
      .catch(() => ({ error: true, participants: this.participants }));
    return response;
  }

  async addParticipant(name, score) {
    if (name && score && !Number.isNaN && typeof name === 'string') {
      const response = await fetch(`${this.endpoint + this.id}/scores/`, {
        method: 'POST',
        body: JSON.stringify({
          user: name,
          score,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((msg) => ({ error: false, msg }))
        .catch(() => ({ error: true, msg: 'Score could not be added' }));
      return response;
    }
    return ({ error: true, msg: 'Invalid name or score value' });
  }

  displayScores() {
    this.getScores()
      .then((res) => {
        if (!res.error) {
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