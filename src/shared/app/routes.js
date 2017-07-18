import loadable from 'loadable-components';

export const AlbumPage = loadable(() => import('../albums/AlbumPage'));
export const HomePage = loadable(() => import('../home/HomePage'));
export const PlaylistPage = loadable(() => import('../playlists/PlaylistPage'));
export const PlayListsPage = loadable(() => import('../playlists/ListPage'));
export const SearchAlbumPage = loadable(() => import('../albums/SearchPage'));
