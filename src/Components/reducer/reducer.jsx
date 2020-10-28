// export const initialState = {
//   user: null,
//   playlists: [],
//   // playlist:null,
//   playing: false,
//   item: null,
//   token: null,
//   spotify: null,
//   index:0,
//   tab:null,
//   artistId:null,
//   paused:false,
//   discover_weekly: null,
//   top_artists: null,
// };

// //Action ->type,[payload]
// const reducer = (state, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.user,
//       };

//     case "SET_PLAYING":
//       return {
//         ...state,
//         playing: action.playing,
//       };

//     case "SET_ITEM":
//       return {
//         ...state,
//         item: action.item,
//       };

//     case "SET_TOKEN":
//       return {
//         ...state,
//         token: action.token,
//       };

//     case "SET_PLAYLISTS":
//       return {
//         ...state,
//         playlists: action.playlists,
//       };

//     case "SET_TOP_ARTISTS":
//       return {
//         ...state,
//         top_artists: action.top_artists,
//       };

//     case "SET_SPOTIFY":
//       return {
//         ...state,
//         spotify: action.spotify,
//       };

//     case "SET_DISCOVER_WEEKLY":
//       return {
//         ...state,
//         discover_weekly: action.discover_weekly,
//       };

//       case 'SET_PAUSE':
//       return {
//         ...state,
//         paused: action.paused
//       };

//     case 'SET_TAB':
//       return {
//         ...state,
//         tab: action.tab
//       };

//       case 'SET_INDEX':
//      return {
//        ...state,
//        index: action.index
//      };

//     case 'SET_ARTIST':
//       return {
//         ...state,
//         artistId: action.artistId
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
// New version
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
  artistId: null
};

// action: {type, [payload]}
const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      };

    case 'SET_PLAYLIST':
      return {
        ...state,
        playlist: action.playlist
      };

    case 'SET_INDEX':
     return {
       ...state,
       index: action.index
     };

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item
      };

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing
      };

    case 'SET_PAUSE':
      return {
        ...state,
        paused: action.paused
      };

    case 'SET_TAB':
      return {
        ...state,
        tab: action.tab
      };

    case 'SET_ARTIST':
      return {
        ...state,
        artistId: action.artistId
      };

    default:
      return state;
  }
};


export default reducer;
