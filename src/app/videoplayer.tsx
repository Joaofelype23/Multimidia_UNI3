"use client";
import { useContext, useEffect, useRef } from "react";
import { HomeContext } from "./context/HomeContext";

export default function VideoPlayer() {
  const {
    playing,
    mediaElement,
  } = useContext(HomeContext);

  const videoRef = useRef<HTMLVideoElement | null>(null); // Nova referência para o vídeo

  useEffect(() => {
    if (videoRef.current && mediaElement) {
      videoRef.current.src = mediaElement.src; // Adiciona a fonte ao vídeo
      if (playing) {
        videoRef.current.play().catch((error) => console.error('Error playing video:', error));
      } else {
        videoRef.current.pause();
      }
    }
  }, [mediaElement, playing]);

  return (
    <div className="videoPlayer">
      <video ref={videoRef} width="100%" controls /> {/* Mantém os controles do vídeo */}
    </div>
  );
}
