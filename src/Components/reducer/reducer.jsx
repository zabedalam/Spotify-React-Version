export const initialState = {
  user: null,
  token: null,
  item: null,
  playing: null,
  playlists: [],
  playlist: null,
  index: 0,
  paused: false,
  tab: null,
  artistId: null,
};

// action: {type, [payload]}
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };

    case "SET_INDEX":
      return {
        ...state,
        index: action.index,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_PAUSE":
      return {
        ...state,
        paused: action.paused,
      };

    case "SET_TAB":
      return {
        ...state,
        tab: action.tab,
      };

    case "SET_ARTIST":
      return {
        ...state,
        artistId: action.artistId,
      };

    default:
      return state;
  }
};

export default reducer;
