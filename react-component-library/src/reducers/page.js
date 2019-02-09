export default (page=1, action) => {
    const {type} = action;
    switch(type){
        case 'INC':   return page + 1;
        case 'SET':   return 1;
        default:      return page;
    }

}