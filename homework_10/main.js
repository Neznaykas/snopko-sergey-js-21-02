import {uploadBase64} from "./img.js";

const fileInp= document.getElementById("fileInput");

const imgArr = localStorage.getItem("imgArr") ?
    JSON.parse(localStorage.getItem("imgArr")) : [];

const button = document.getElementById("fileButton");

button.addEventListener("click", () => {
    if (fileInp.files[0]) {
        uploadBase64(fileInp.files[0], (response) => {

            imgArr.push(response.data.display_url);
            localStorage.setItem("imgArr", JSON.stringify(imgArr));

        }, console.error);
    }
})
