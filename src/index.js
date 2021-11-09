import './style.css';
import Scores from './leaderboard';

const leaderboard = new Scores();
leaderboard.getScores()
.then((res) => {
    if(!res.error){
        leaderboard.participants = res.participants;
        leaderboard.displayScores();
    }
});
