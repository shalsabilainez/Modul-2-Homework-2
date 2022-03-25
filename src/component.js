import React from 'react'

function App(props) {
  return <h1>Playlist, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <div clasname="header">
      <div clasname="album">
      <img src={data.album.images[1].url} alt="" />
      <h2>{data.album.name}</h2>
      <button>
        <a href={data.uri}>pilih</a>
      </button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);