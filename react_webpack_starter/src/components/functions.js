import {LIMITSTRING} from "./constants";
export const limit = (str, limit = LIMITSTRING) => {
    if(str.length >= limit){
        const arrString = str.split(' ');
        let cutString = '';
        if(arrString >= 2){
            for(let i=0; i < arrString.length; i++){
                if(cutString.length + arrString[i].length > limit){
                    return cutString + ' ...';
                }
                cutString += ' '+arrString[i];
            }
            return cutString;
        }else{
            for(let i=0; i < arrString[0].length; i++){
                if(cutString.length + arrString[0][i].length > limit){
                    return cutString + ' ...';
                }
                cutString += arrString[0][i];
            }
            return cutString;
        }

    }
    return str;
};
export const onMouseOver = (e, string) => {
    const target = e.target;
    const tooltip = target.getAttribute('data-tooltip');
    if (!tooltip) return;
    const tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = string;
    document.body.appendChild(tooltipElem);

    const coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // не вылезать за левую границу окна

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // не вылезать за верхнюю границу окна
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    this.showingTooltip = tooltipElem;
};
export const onMouseLeave = () => {
    if (this.showingTooltip) {
        document.body.removeChild(this.showingTooltip);
        this.showingTooltip = null;
    }
};