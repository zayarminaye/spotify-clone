export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //Remove token string value after finished developing
    // token: 'BQB3taelMXGIxC74qxZ0Jvw2hw1F20Dy2F0yGdQpd-pfWhaI3Sx6Nen91cnWp-8VSCOnleJHOBlFSY-hhaz1VKO_OUwwbFAyQ6zOUN18lEpF5igDvsR6or4uK2cm0FGs_-nrzEPYkBej_02ocuu_oZjKIjbnDQ',
}; 

const reducer = (state, action) => {
    // action -> type, [payload] which can be dynamic
console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
}

export default reducer;