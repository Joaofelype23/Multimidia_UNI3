"use client";
import React from 'react';
import { Media } from './dados/media';

type SidebarProps = {
    mediaFiles: Media[];
    onSelectMedia: (media: Media) => void;
    selectedMedia: Media | null; // Adicionando uma propriedade para o item selecionado
}

const Sidebar: React.FC<SidebarProps> = ({ mediaFiles, onSelectMedia, selectedMedia }) => {
    return (
        <div className="sidebar">
            <h2 className="tituloSidebar">Minha Playlist de Vídeos</h2>
            <ul>
                {mediaFiles.map(media => (
                    <li
                        key={media.name}
                        className={`cursor-pointer p-2 rounded-lg transition duration-200 ${selectedMedia?.name === media.name ? 'bg-gray-700' : ''}`} // Estilo para o item selecionado
                        onClick={() => onSelectMedia(media)}
                    >
                        <h3 className="nomemusica">{media.name}</h3>
                        <p className="autormusica">{media.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
