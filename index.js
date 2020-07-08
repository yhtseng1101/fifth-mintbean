function getHeight() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    console.log("Width: " + w + "Height: " + h);
    document.getElementById('container').style.height = `${h}px`;
};

getHeight();

let url = [];

function getPhoto(value) {
    url = [];
    fetch(`https://api.unsplash.com/photos/random?query=${value}&count=6&client_id=i_aQLms0SMfh9pUAJLdDJP5uQIJzKCmuWmNy1qNY27w`)
    .then(res => res.json())
    .then((data) => {
        console.log(value);
        console.log(data);
        for(var i=0; i < data.length; i++) {
            url.push(data[i].urls.regular);
            document.getElementsByClassName('photo')[i].src = url[i];
            document.getElementsByClassName('loader')[i].classList.add('hide');
            document.getElementsByClassName('photo')[i].classList.remove('hide');
            console.log(url);
        }
    })
    .catch(err => alert(err))
}

function yourPick() {
    let yourPick = document.getElementById('yourPick').value;
    getPhoto(yourPick);
}

// Execute a function when the user releases a key on the keyboard
document.getElementById('yourPick').addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("yourPickBtn").click();
    }
});
