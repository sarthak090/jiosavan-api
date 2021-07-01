import formatter from '../utils/formatter';

import request from '../utils/request';

import endpoints from '../utils/endpoints';
/**
 *
 * @param {string} id id of the song
 * @param {boolean} lyrics true or false
 * @returns songs data with lyrics
 */
const getSong = async (id: string, lyrics: boolean) => {
  try {
    const song: any = await request(endpoints.songDetailsBaseUrl + id);

    return formatter.songResponse(song[id], lyrics);
  } catch (err) {
    return err;
  }
};
/**
 *
 * @param {string} id id of the song
 * @returns lyrics of the song
 */
const getLyrics = async (id: string) => {
  try {
    return await request(endpoints.lyricsBaseUrl + id);
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
interface IResponseAlbum {
  id?: string;
  image?: string;
  primary_artists?: string;
  // songs?: IResponse[];
}
const getAlbum = async (id: string, lyrics: boolean) => {
  try {
    const albumData: IResponseAlbum | any = await request(endpoints.albumDetailsBaseUrl + id);
    return formatter.albumResponse(albumData, lyrics);
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
interface IResponse {
  id: string;
  media_preview_url: string;
  primary_artists: string;
  singers: string;
  starring: string;
  has_lyrics: string;
}
interface IResponsePlaylist {
  listid?: string;
  listname: string;
  songs: IResponse[];
}
const getPlaylist = async (id: string, lyrics: boolean) => {
  try {
    const albumData: IResponsePlaylist | any = await request(endpoints.playlistDetailsBaseUrl + id);

    return formatter.playListResponse(albumData, lyrics);
  } catch (err) {
    return err;
  }
};
export default {
  getSong,
  getLyrics,
  getAlbum,
  getPlaylist,
};
