export default (users=[], action) => {
    const {type, payload} = action;
    switch(type){
        case 'ADD':   return [...users, ...payload];
        case 'WRITE': return [...payload];
        case 'INSERT': return [payload, ...users];
        default:      return users;
    }

}