export default class Scores {
  constructor() {
    this.participants = [
      {
        name: 'john Doe',
        score: 112,
      },
      {
        name: 'Jeff Doe',
        score: 112,
      },
      {
        name: 'Meri Doe',
        score: 121,
      },
      {
        name: 'Blessed Doe',
        score: 122,
      },
    ];
  }

  displayScores() {
    const scoresDomList = document.querySelector('.scores-list');
    scoresDomList.innerHTML = '';
    this.participants.forEach((participant) => {
      scoresDomList.innerHTML += `<li>${participant.name}: ${participant.score}</li>`;
    });
  }
}