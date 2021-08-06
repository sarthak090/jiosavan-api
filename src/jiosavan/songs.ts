import formatter from '../utils/formatter';
import request from '../utils/request';
import endpoints from '../utils/endpoints';
import { Album, Lyrics, SongDetails, Playlist } from '../interfaces/Songs';

/**
 *
 * @param {string} id id of the song
 * @param {boolean} lyrics true or false
 * @returns songs data with lyrics
 */
const getSong = async (id: string, lyrics?: boolean): Promise<SongDetails> => {
  try {
    const ly = lyrics ? lyrics : false;
    const song: any = await request(endpoints.songDetailsBaseUrl + id);
    const formattedRes: any = formatter.songResponse(song[id], ly);
    return formattedRes;
  } catch (err) {
    return err;
  }
};
const getSongs = async (ids: string[], lyrics?: boolean): Promise<SongDetails[]> => {
  try {
    const ly = lyrics ? lyrics : false;
    const allResponses: any = ids.map(async (id) => getSong(id, ly));
    return allResponses;
    // const song: any = await request(endpoints.songDetailsBaseUrl + id);
    // const formattedRes: any = formatter.songResponse(song[id], ly);
    // return formattedRes;
  } catch (err) {
    return err;
  }
};
/**
 *
 * @param {string} id id of the song
 * @returns lyrics of the song
 */
const getLyrics = async (id: string): Promise<Lyrics> => {
  try {
    const song: any = await request(endpoints.lyricsBaseUrl + id);

    return song;
  } catch (err) {
    return err;
  }
};

/**
 *
 * @param {string} id id of the album
 * @param {boolean} lyrics true or false
 * @returns album data
 */

const getAlbum = async (id: string, lyrics?: boolean): Promise<Album> => {
  try {
    const ly = lyrics ? lyrics : false;

    const albumData: any = await request(endpoints.albumDetailsBaseUrl + id);
    const formattedRes: any = formatter.albumResponse(albumData, ly);
    return formattedRes;
  } catch (err) {
    return err;
  }
};
/**
 *
 * @param {string} id  id of the playlist
 * @param {boolean} lyrics true or false
 * @returns  playlist data
 */

const getPlaylist = async (id: string, lyrics?: boolean): Promise<Playlist> => {
  try {
    const ly = lyrics ? lyrics : false;

    const albumData: any = await request(endpoints.playlistDetailsBaseUrl + id);
    const formattedRes = formatter.playListResponse(albumData, ly);
    return formattedRes;
  } catch (err) {
    return err;
  }
};
export default {
  getSong,
  getLyrics,
  getAlbum,
  getPlaylist,
  getSongs,
};
