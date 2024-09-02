import axios from "axios"

const api =axios.create({

    // todo : move this value to env variable.

    baseURL: "https://api.example.com",

    // default header
   headers:{
    'Content-Type':"application/json"
   }
})