import albums from '../albums/albumsData';

export const genres = ['jazz', 'rock', 'funk'];

export const playlists = [
    { id: 'pl-funk', title: 'Playlist funk', albums: albums.filter(a => a.genre === 'funk'), genre: 'funk' },
    { id: 'pl-rock', title: 'Playlist rock', albums: albums.filter(a => a.genre === 'rock'), genre: 'rock' },
    { id: 'pl-jazz', title: 'Playlist jazz', albums: albums.filter(a => a.genre === 'jazz'), genre: 'jazz' },
];
