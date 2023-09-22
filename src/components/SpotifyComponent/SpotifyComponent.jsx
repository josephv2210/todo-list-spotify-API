import React, { Component, useEffect, useState } from 'react';
import spotifyIcon from '../../assets/svg/spotify-icon.svg'
import axios from 'axios';

function SpotifyComponent(props) {
    const { text } = props;

    // Renderizar el contenido de la aplicación
    return (
        <div className='flex gap-2 justify-center items-center'>
            <img src={spotifyIcon} alt="spotify icon" className='h-9' />
            <a target="_blank" href={`https://open.spotify.com/search/${text}/tracks`}>Canción</a>
        </div>
    )
}

export default SpotifyComponent;
