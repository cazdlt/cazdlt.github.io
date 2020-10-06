const getData = async () => {
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "text/plain"
        }
    });
    let data = response.text();
    return data;
};

function getJoke() {
    document.getElementById("joke-btn").innerHTML = "¿Qué más dicen?";
    getData()
        .then((data) => {
            console.log(data);
            document.getElementById("joke").innerHTML = data;
        })
        .catch((e) => console.log(e.message));
}
