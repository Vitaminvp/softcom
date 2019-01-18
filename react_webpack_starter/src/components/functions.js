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