import axios from "axios";
import { getCookie } from "../utils/cookieUtils.js"; // Ensure the extension is .js for JavaScript

const baseUrl = "http://localhost:8081/api/";

const service = axios.create({
    baseURL: baseUrl,
    timeout: 10000
});

service.interceptors.request.use((config) => {
    const token = getCookie("token");
    if (token != null && token !== "") {
        axios.defaults.headers.common["Authorization"] = token;
        config.headers['Authorization'] = token;
    }
    return config;
});

export default service;
