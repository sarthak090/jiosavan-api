import request from '../utils/request';
import endpoints from '../utils/endpoints';

const search = async (query: string) => {
  try {
    const searchResult = await request(endpoints.searchBaseUrl + query);
    return searchResult;
  } catch (err) {
    return err;
  }
};
interface ISearchRes {
  albums: object;
  songs: { data: any };
  artists: object;
  topquery: object;
  shows: object;
  episodes: object;
}
const searchSongs = async (query: string) => {
  try {
    const searchResult: ISearchRes | any = await request(endpoints.searchBaseUrl + query);
    return searchResult.songs.data;
  } catch (err) {
    return err;
  }
};

const searchAlbums = async (query: string) => {
  try {
    const searchResult: ISearchRes | any = await request(endpoints.searchBaseUrl + query);
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
const searchPlaylists = async (query: string) => {
  try {
    const searchResult: ISearchRes | any = await request(endpoints.searchBaseUrl + query);
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

const searchArtist = async (query: string) => {
  try {
    const searchResult: ISearchRes | any = await request(endpoints.searchBaseUrl + query);
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
