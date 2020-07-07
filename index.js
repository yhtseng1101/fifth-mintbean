function getHeight() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    console.log("Width: " + w + "Height: " + h);
    document.getElementById('container').style.height = `${h}px`;
};

getHeight();

let url = [];

fetch(`https://api.unsplash.com/photos/random?query=painting&count=6&client_id=i_aQLms0SMfh9pUAJLdDJP5uQIJzKCmuWmNy1qNY27w`)
.then(res => res.json())
.then((data) => {
    console.log(data);
    for(var i=0; i < data.length; i++) {
        url.push(data[i].urls.regular);
        document.getElementsByClassName('photo')[i].src = url[i];
        console.log(url);
    }
})
.catch(err => alert(err))

