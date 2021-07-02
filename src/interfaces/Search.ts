export interface RSearch {
  albums: {
    data: Song[];
    position: number;
  };
  songs: {
    data: Song[];
    position: number;
  };
  playlists: {
    data: Playlist[];
    position: number;
  };
  artists: {
    data: Artist[];
    position: number;
  };
  topquery: {
    data: Query[];
    position: number;
  };

  shows: {
    data: Show[];
    position: number;
  };
}

export type Song = {
  id: string;
  title: string;
  image: string;
  music: string;
  url: string;
  type: string;
  description: string;
  ctr: number;
  position: number;
  more_info: {
    year: string;
    is_movie: string;
    language: string;
    song_pids: string;
  };
};

export type Playlist = {
  id: string;
  title: string;
  image: string;

  extra: string;
  url: string;

  language: string;
  type: string;
  description: string;

  position: number;
  more_info: null | {
    year: string;
    is_movie: string;
    language: string;
    song_pids: string;
  };
};

export type Artist = {
  id: string;
  title: string;
  image: string;

  extra: string;
  url: string;

  type: string;
  description: string;
  ctr: number;
  entity: number;
  position: number;
};

export type Query = {
  id: string;
  title: string;
  image: string;
  album: string;
  url: string;
  type: string;
  description: string;
  ctr: number;
  position: number;
  more_info: {
    year: string;
    is_movie: string;
    language: string;
    song_pids: string;
  };
};

export type Show = {
  id: string;
  title: string;
  image: string;
  type: string;
  season_number: number;
  description: string;

  url: string;
  position: number;
};
