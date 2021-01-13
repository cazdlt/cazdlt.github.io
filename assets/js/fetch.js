const getData = async () => {
    try {
        const url = `${window.location.origin}/.netlify/functions/frases`;

        let response = await fetch(url, {
            headers: {
                Accept: "text/plain"
            }
        });
        if (response.ok) return response.text();
        else throw response;
    } catch (e) {
        console.log(e);
        return "no mucho - hubo un error :(";
    }
};

function getFrase() {
    document.getElementById("joke-btn").innerHTML = "¿Qué más dicen?";
    getData()
        .then((data) => {
            document.getElementById("joke").innerHTML = data;
        })
        .catch((e) => console.log(e.message));
}
