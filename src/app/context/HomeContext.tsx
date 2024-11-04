"use client";
import React, { createContext, useState, useEffect } from "react";
import { Media, mediaFiles } from "../dados/media"; // Atualizado

type HomeContextProps = {
  playing: boolean;
  selectedMedia: Media | null;
  configPlayPause: () => void;
  selectMedia: (media: Media) => void;
  playNextMedia: () => void;
  playPreviousMedia: () => void;
  mediaElement: HTMLVideoElement | null; // Agora é para vídeo
  setVolume: (volume: number) => void;
};

export const HomeContext = createContext<HomeContextProps | undefined>(undefined);

const HomeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [playing, setPlaying] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [mediaElement, setMediaElement] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (selectedMedia) {
      const newMedia = document.createElement("video");
      newMedia.src = selectedMedia.urlMedia;
      newMedia.volume = 1;
      setMediaElement(newMedia);

      return () => {
        newMedia.pause();
        setMediaElement(null);
      };
    }
  }, [selectedMedia]);

  const configPlayPause = () => {
    if (mediaElement) {
      if (playing) {
        mediaElement.pause();
      } else {
        mediaElement.play();
      }
      setPlaying(!playing);
    }
  };

  const playNextMedia = () => {
    const currentIndex = mediaFiles.findIndex((m) => m === selectedMedia);
    const nextIndex = (currentIndex + 1) % mediaFiles.length;
    setSelectedMedia(mediaFiles[nextIndex]);
  };

  const playPreviousMedia = () => {
    const currentIndex = mediaFiles.findIndex((m) => m === selectedMedia);
    const prevIndex = (currentIndex - 1 + mediaFiles.length) % mediaFiles.length;
    setSelectedMedia(mediaFiles[prevIndex]);
  };

  const setVolume = (volume: number) => {
    if (mediaElement) {
      mediaElement.volume = volume;
    }
  };

  return (
    <HomeContext.Provider
      value={{
        playing,
        selectedMedia,
        configPlayPause,
        selectMedia: setSelectedMedia,
        playNextMedia,
        playPreviousMedia,
        mediaElement,
        setVolume,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
