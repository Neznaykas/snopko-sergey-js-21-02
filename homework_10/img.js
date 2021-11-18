import {load} from "./anim.js";

export const URL = "https://api.imgbb.com/1/upload";
export const KEY = "f24733575ebe6fcb8eeeda9ef8ea8db8";

export function uploadBase64(file,callback,callbackError) {
    const reader = new FileReader();
    reader.readAsDataURL(file)

    reader.onload = async () => {
        load(true);
        const formData = new FormData();
        formData.set("key", KEY);
        formData.set("image", reader.result.replace(/^.*,/, ""));

        await fetch(URL, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(callback)
            .catch(callbackError);

        load(false);
    }

}