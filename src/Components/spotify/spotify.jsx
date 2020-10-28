// https://developer.spotify.com/documentation/general/guides/authorization-guide/
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with app's client ID redirect URI and desire scope
const clientId = "a38beef18a7c4532999d267c873ff2b4";
const redirectUri = "http://localhost:3000/";

// Scopes enable your application to access specific API endpoints on behalf of a user.
// The set of scopes you pass in your call determines the access permissions that the user is required to grant.
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",// get a user's top artists and tracks
  "user-modify-playback-state",
];

//Pulling the access token from ULR
// return an object
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
