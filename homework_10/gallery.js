export function addToGallery(url)
{
    const div = document.createElement("div");
    div.classList.add("gallery__img");

    const img = document.createElement("img");
    img.src = url;

    div.append(img);

    document.getElementById("gallery").append(div);
}