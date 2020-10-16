export const authEndpoint="https://accounts.spotify.com/authorize";
// Replace with app's client ID redirect URI and desire scope
const clientId="a38beef18a7c4532999d267c873ff2b4"
const redirectUri="http://localhost:3000/"
const scopes=[
"user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state",]

//Pulling the access token from ULR
export const getTokenFromResponse=()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        let parts=item.split("=")
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial
    },{})
}



export const accessUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"  
)}&response_type=token&show_dialog=true`
