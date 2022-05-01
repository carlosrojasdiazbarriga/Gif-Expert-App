
export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (category)}&limit=10&api_key=yXz8eeN8xzPO1ND8fR9L0dljXusgAKFd`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifdata= data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url,
        }
    });
    // console.log(gifdata);
    return gifdata;
}
