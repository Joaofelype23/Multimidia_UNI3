// Home.tsx
'use client'

import { useContext } from "react";
import { HomeContext } from "./context/HomeContext";
import { mediaFiles } from "./dados/media"; // Alterado para lidar com vídeos
import Sidebar from './Sidebar';
import VideoPlayer from './videoplayer';

export default function Home() {
  const {
    selectedMedia,
    selectMedia,
  } = useContext(HomeContext);

  return (
    <div className="conteiner">
      <Sidebar mediaFiles={mediaFiles} onSelectMedia={selectMedia} />
      <div className="central">
        <main className="musicposter">
          {selectedMedia ? (
            <div className="poster">
              <img src={selectedMedia.image} alt={selectedMedia.name} className="ImagemMusica" />
              <h2 className="nomemusica">{selectedMedia.name}</h2>
              <p className="autormusica">{selectedMedia.author}</p>
            </div>
          ) : (
            <p>Selecione um vídeo.</p>
          )}
          <div className="VideoPlayer">
            <VideoPlayer />
          </div>
        </main>
      </div>
    </div>
  );
}
