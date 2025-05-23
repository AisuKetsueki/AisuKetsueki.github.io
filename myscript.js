function include(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page non trouvée");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("include").innerHTML = data;
        })
        .catch(error => {
            document.getElementById("include").innerHTML = `<div class="alert alert-danger">Erreur : ${error.message}</div>`;
        });
}
