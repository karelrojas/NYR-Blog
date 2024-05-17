import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [gamesList, setGamesList] = useState([]);
  const [seasonRec, setSeasonRec] = useState([,,]);
  const [postSeasonRec, setPostSeasonRec] = useState([]);

  async function getGames(){
    const res = await axios.get('http://localhost:8082/games');
    console.log(res.data.gamesByDate);
    setGamesList(res.data.gamesByDate);
  }

  async function getSeasonRec(){
    const res = await axios.get('http://localhost:8082/season');
    console.log(res.data);
    setSeasonRec(res.data);

  }

  async function getPostSeasonRec(){
    const res = await axios.get('http://localhost:8082/postseason');
    console.log(res.data.goalies);
    setPostSeasonRec(res.data.goalies);
  }
  

  return (
    <div className="App">
      <div className="Header">
        <div className="Title">
          Placeholder Title
        </div>
        <div className="Page-links">
          <div className="Link 1">Blog</div>
          <div className="Link 2">Statistics</div>
          <div className="Link 3">News</div>
        </div>
        <button onClick={getGames}>Get Games</button>
        <button onClick={getSeasonRec}>Get Record</button>
        <button onClick={getPostSeasonRec}>Get Post Record</button>
      </div>
      <div className="Upcoming">
        <div className="Current-record">
          {postSeasonRec.map((data) => (
            <h1 className="Record">{data.wins} - {data.losses} - {data.overtimeLosses}</h1>
          ))}
        </div>
        <div className="Upcoming-games">
          <div className="Game-Container">
           {gamesList.map((gameInfo, index) => (
            <div key={index} className="Game-Info">
            {gameInfo.games.map((singleGame, ind) => (
              <div key={ind} className="Single-Game">
                <div className="Game GameDate">{singleGame.gameDate}</div>
                <div className="Score-Container">
                <div className="Game HomeTeam">{singleGame.awayTeam.abbrev}</div>
                  <img src={singleGame.awayTeam.logo} className="Game Logos"/>
                  <div className="Game Score">{singleGame.awayTeam.score}</div>
                  <>_</>
                  <div className="Game Score">{singleGame.homeTeam.score}</div>
                  <img src={singleGame.homeTeam.logo} className="Game Logos"/>
                  <div className="Game AwayTeam">{singleGame.homeTeam.abbrev}</div>
                </div>
              </div>
            ))}
            </div>
          ))} 
          </div>
        </div>
      </div>
      <div className="Main-body">
        <div className="Statistics">
          <div className="Player-highlight">
            Placeholder Player
          </div>
          <div className="Quick-stats">
            Regular Season Record
            <div className="Regular-Season">{seasonRec[0]} - {seasonRec[1]} - {seasonRec[2]}</div>

          </div>
        </div>
        <div className="Blog-preview">
          Placeholder Blog Section
        </div>
        <div className="External">
          <div className="Articles">
            Placeholder Articles
          </div>
          <div className="E-links">
            Placeholder E-links
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
