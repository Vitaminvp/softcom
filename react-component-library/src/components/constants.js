export const URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=';
export const URLUSER = 'https://frontend-test-assignment-api.abz.agency/api/v1/users/';

export const URL1 = 'https://frontend-test-assignment-api.abz.agency/api/v1/users/1';
export const URL_POST = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';
export const URL_TOKEN = 'https://frontend-test-assignment-api.abz.agency/api/v1/token\n';

export const PROXY = 'https://cors-anywhere.herokuapp.com/';
export const PROXY2 = 'https://crossorigin.me/';

export const LIMITSTRING = 14;
export const NumUsers = 6;
export const TOKENTIME = 40*60*1000;
export const REG = {
    inputName:     () => new RegExp('\\w{3,60}', 'ig'),
    inputPhone:    () => new RegExp('^([+]?380[ ]?)[\\( ]?[\\d]{2}[\\)]?[ ]?([\\d]{3}[- ]?[\\d]{2}[- ]?[\\d]{2})$'),
    inputEmail:    () => new RegExp('^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$'),
    inputPosition: () => new RegExp('^[^0]'),
    inputFile:     () => new RegExp('fakepath', 'i')
};
