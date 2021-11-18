export function load(run){
    const ld = document.getElementById("loader");

    if (run) {
        ld.style.display = "block";
    }
    else{
        ld.style.display = "none";
    }
}