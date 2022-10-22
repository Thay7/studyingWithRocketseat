
const url = "https://localhost:5500/api"

function getUsers() {

    axios.get(url)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))


}

getUsers()