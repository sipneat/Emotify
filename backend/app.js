OPEN_AI_KEY = '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'

require(dotenv).config();
const { Configuration, OpenAI } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAiApi(configuration);
const response = await openai.createCompletion({
    model: "text-davinvi-003",
    prompt: 'Find me songs on Spotify for ${this.state.text2}',
})















/*
const control = (function() {
    const userId = '7f3b7206f0ed44c68784e4a730f8ca3d';
    const userSecret = '9a6705b41a0741b4bda2f5b24e08be64';
})
const _getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa( userId + ':' + userSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    return data.access_token;
}
const _getGenres = async (token) => {
    const result = await fetch('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
}
const _getMusic = async (token, trackEndPoint) => {
    limit = 10;
    const result = await fetch('${trackEndPoint}?limit=${limit}', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
    const data = await result.json();
    return data;
}
return {
    getToken() {
        return _getToken();
    },
    getGenres(token) {
        return _getGenres(token);
    },
    getMusic(toke, tracksEndPoint) {
        return _getMusic(token, tracksEndPoint);
    },
}*/














