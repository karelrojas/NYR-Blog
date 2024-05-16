import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [gamesList, setGamesList] = useState([]);

  async function getGames(){
    const res = await axios.get('http://localhost:8082/games');
    console.log(res.data.gamesByDate);
    setGamesList(res.data.gamesByDate);
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
      </div>
      <div className="Upcoming">
        <div className="Current-record">

        </div>
        <div className="Upcoming-games">
          <button onClick={getGames}>Get Games</button>
           {gamesList.map((gameInfo, index) => (
            <div key={index} className="gameInfo">
            {gameInfo.games.map((singleGame, ind) => (
              <div key={ind} className="singleGame">
                <div className="game gameDate">{singleGame.gameDate}</div>
                <div className="game awayTeam">{singleGame.awayTeam.abbrev}</div>
                <div className="game score">{singleGame.awayTeam.score}</div>
                <div className="game homeTeam">{singleGame.homeTeam.abbrev}</div>
                <div className="game score">{singleGame.homeTeam.score}</div>
              </div>
            ))}
            </div>
          ))} 
          <div className="example"></div>
        </div>
      </div>
      <div className="Main-body">
        <div className="Statistics">
          <div className="Player-highlight">
            Placeholder Player
          </div>
          <div className="Quick-stats">
            Placeholder Stats
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
