export function change__theme()
{
    let divs = document.querySelectorAll('div, aside, header, footer, h2, h3, h4, section,p') as NodeListOf<HTMLElement>; //div
    for (let i: number = 0; i < divs.length; i++) {

        let btn = document.getElementById('header__theme__input') as HTMLInputElement;

        if (btn !== null)
        {
            if (btn.checked)
            {
                console.log(divs[i].className);

                if (divs[i].id !== 'root')
                    divs[i].classList.add(divs[i].className + '__theme-dark');
            } else {
                for (let j: number = 0; j < divs[i].classList.length; j++)
                {
                    let item: string | null = divs[i].classList.item(j);
                    let index: number = 0;

                    if (item !== null)
                        index = item.search("__theme-dark")

                    if (index > 0)
                    {
                        divs[i].classList.remove(<string>divs[i].classList.item(j));
                        break;
                    }
                }
            }

        }
    }
}