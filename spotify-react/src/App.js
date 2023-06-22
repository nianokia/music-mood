import "./App.css";

function App() {
  const CLIENT_ID = "431ba1ed87394bc8953215ddf80f3ef3";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div className="App">
      <header>
        <h1>Mood Music App</h1>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      </header>
    </div>
  );
}

export default App;
