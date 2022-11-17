import axios from "axios"

const request = axios.create({
    baseURL : "https://hamburgueria-kenzie-json-serve.herokuapp.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default request