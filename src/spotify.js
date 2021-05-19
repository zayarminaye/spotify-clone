// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "c6253eec084e4cdfaf3bfdcf2ca0278d";

// scopes is basically for the things you can do in the spotify clone app like playing the songs, you cannot delete songs from the playlist
// because the deleting songs scope is not mentioned in below scopes array.
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// find and capture the token after # tag in the url and return to App.js
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        // #access_token=secrettoken&name=zayarminaye
        let parts = item.split('=');
        // part[0] is access_token & parts[1] is secrettoken from url
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    },{});

}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

