export default (button = true, action) => {
    const {type} = action;
    switch(type){
        case 'TRUE':  return true;
        case 'FALSE': return false;
        default:      return button;
    }

}