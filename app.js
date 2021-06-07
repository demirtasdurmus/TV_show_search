const form = document.querySelector("#searchForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userText = form.elements.query.value;
    const config = {params: {q: userText}}
    axios.get (`http://api.tvmaze.com/search/shows`, config)
        .then(res => {
            makeImages(res.data);
        })
})


const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
        const showImage = result.show.image.medium;
        const newImg = document.createElement("img");
        newImg.src = showImage;
        document.body.append(newImg);
        }
    }
}