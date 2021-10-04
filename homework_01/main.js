function change__theme()
{
    let divs = document.querySelectorAll('div, aside, header, footer, body, h2, h3, h4, section,p'); //div
    for (let i = 0; i < divs.length; i++) {
        if (document.getElementById('header__theme__input').checked) {

            console.log(divs[i].className);
            divs[i].classList.add(divs[i].className + '__theme-dark');
        }
        else {
            for (let j = 0; j < divs[i].classList.length; j++)
            {
                if (divs[i].classList.item(j).search("__theme-dark") >= 0) {
                    divs[i].classList.remove(divs[i].classList.item(j));
                    break;
                }
            }
        }
    }
}