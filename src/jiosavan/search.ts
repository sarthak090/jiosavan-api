import request from '../utils/request';
import endpoints from '../utils/endpoints';
import { RSearch, Song, Playlist, Artist } from '../interfaces/Search';
const search = async (query: string): Promise<RSearch> => {
  try {
    const searchResult: any = await request(endpoints.searchBaseUrl + query);
    return searchResult;
  } catch (err) {
    return err;
  }
};

const searchSongs = async (query: string): Promise<Song[]> => {
  try {
    const searchResult: any = await request(endpoints.searchBaseUrl + query);
    return searchResult.songs.data;
  } catch (err) {
    return err;
  }
};

const searchAlbums = async (query: string): Promise<Song[]> => {
  try {
    const searchResult: any = await request(endpoints.searchBaseUrl + query);
    return searchResult.albums.data;
  } catch (err) {
    return err;
  }
};

/**
 * Get  Search Data of Playlists
 * @param {string} required query : Search string such as name of the album
 * @returns {Promise} Returns  array of playlists
 *
 */
const searchPlaylists = async (query: string): Promise<Playlist[]> => {
  try {
    const searchResult: any = await request(endpoints.searchBaseUrl + query);
    return searchResult.playlists.data;
  } catch (err) {
    return err;
  }
};

/**
 * Get  Search Data of Artists
 * @param {string} query : Search string such as name of the artist
 * @returns {Promise} Returns  array of artists
 *
 */

const searchArtist = async (query: string): Promise<Artist[]> => {
  try {
    const searchResult: any = await request(endpoints.searchBaseUrl + query);
    return searchResult.artists.data;
  } catch (err) {
    return err;
  }
};

export default {
  searchSongs,
  searchAlbums,
  searchArtist,
  searchPlaylists,
  search,
};
