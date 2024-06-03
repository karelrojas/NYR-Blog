import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [gamesList, setGamesList] = useState([]);
  const [seasonRec, setSeasonRec] = useState([,,]);
  const [postSeasonRec, setPostSeasonRec] = useState([]);
  const [skaters, setSkaters] = useState();
  const [recentBlogs, setRecentBlogs] = useState([]);

useEffect(() => {
  getGames();
  getSeasonRec();
  getPostSeasonRec();
  getRecentBlogs();

}, []);

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
    console.log(res.data.skaters[randNum(res.data.skaters.length)]);
    console.log(res.data.goalies);
    setSkaters(res.data.skaters[randNum(res.data.skaters.length)]);
    setPostSeasonRec(res.data.goalies);
  }

  async function getRecentBlogs(){
    const res = await axios.get('http://localhost:8082/recent-blogs');
    console.log(res.data);
    setRecentBlogs(res.data);
  }

  function randNum(limit) {
    return Math.floor(Math.random() * limit);
  }

  return (
    <div className="App">
      <div className="Upcoming">
        <div className="Current-record">
          <img className="Record-bg" src="/img/MSG_image.jpg"/>
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
            { skaters != null && (
              <div className="Player">
                <h4>Player of the Day</h4>
                <img src={skaters.headshot} className="Player-image" /> 
                <h3 className="Player-name">{skaters.firstName.default} {skaters.lastName.default}</h3>
                <table className="Player-stats">
                  <tr className="Stat-labels">
                    <th scope="col">GP</th>
                    <th scope="col">G</th>
                    <th scope="col">A</th>
                    <th scope="col">P</th>
                    <th scope="col">+/-</th>
                  </tr>
                  <tr>
                    <td>{skaters.gamesPlayed}</td>
                    <td>{skaters.goals}</td>
                    <td>{skaters.assists}</td>
                    <td>{skaters.points}</td>
                    <td>{skaters.plusMinus}</td>
                  </tr>
                </table>
              </div>
            )}
          </div>
          <div className="Quick-stats">
            Regular Season Record
            <div className="Regular-Season">{seasonRec[0]} - {seasonRec[1]} - {seasonRec[2]}</div>
          </div>
        </div>
        <div className="Blog-preview">
          {recentBlogs.map((data, index) => (
            <div className="Blog-article" key={index}>
              <a href={"/blogs/" + data.id} className="Blog-link">
                <div className="Blog-header">
                  <div className="Blog-title">{data.title}</div>
                  <div className="Blog-subtitle">{data.subtitle}</div>
                </div>
              </a>
              <div className="Blog-info">
                <div className="Blog-author">By {data.author}</div>
                <div className="Blog-publishDate">Published on {data.publishDate}</div>
              </div>
              <a href={"/blogs/" + data.id} className="Blog-link">
                <p className="Blog-body main-page">{data.body}</p>
              </a>
            </div>
          ))}
          <a href="/blogs" className="More-blogs">More Blogs</a>
        </div>
        <div className="External">
          <div className="Articles">
            News Articles
          <a href="https://www.nhl.com/rangers/" target="_blank" rel="noopener noreferrer">NHL Website</a>
          <a href="https://nypost.com/new-york-rangers/" target="_blank" rel="noopener noreferrer">New York Post</a>
          <a href="https://www.blueshirtbanter.com/" target="_blank" rel="noopener noreferrer">Blueshirt Banter</a>
          </div>
          <div className="E-links">
            <div className="NYR-links">
              New York Rangers
              <a href="https://x.com/NYRangers" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
              <a href="https://www.instagram.com/nyrangers/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="Updates-links">
              Team/Game Updates
              <a href="https://x.com/vzmercogliano" target="_blank" rel="noopener noreferrer">Vince Mercogliano</a>
              <a href="https://x.com/drosennhl" target="_blank" rel="noopener noreferrer">Dan Rosen</a>
              <a href="https://x.com/VallysView" target="_blank" rel="noopener noreferrer">Stephen Valiquette</a>
            
            </div>
            <div className="Personalities-links">
              <div />
              Personalities
              <a href="https://x.com/OhRyanMead" target="_blank" rel="noopener noreferrer">Ryan Mead</a>
              <a href="https://x.com/BlueshirtsBreak" target="_blank" rel="noopener noreferrer">Greg Kaplan</a>
              <a href="https://x.com/based_shesty" target="_blank" rel="noopener noreferrer">Andrew (Based Shesty)</a>
              <a href="" target="_blank" rel="noopener noreferrer"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
