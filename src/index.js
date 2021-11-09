import './style.css';
import Scores from './leaderboard';

const leaderboard = new Scores();
leaderboard.displayScores();
// refresh btn
document.querySelector('.refresh').addEventListener('click', () => {
    leaderboard.displayScores();
});
// form submission
const form = document.querySelector('.add-score');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name.value;
    const score = form.elements.score.value;
    leaderboard.addParticipant(name, score).then((res) => {
        if(!res.error){
            form.reset();
        }
    });
});
