/**
 * 
 * @param {Object} state Object statement
 * @param {Object} action Object action
 * @returns 
 */
function photoReducer(state={photos:{},current:{}},action)
{
    switch(action.type)
    {
        case "addPhoto":
            {
                let tmp={};
                action.payload.forEach(element => {
                    tmp[element.id]=element;
                });
                
                Object.assign(tmp,state.photos)
              return   {photos:tmp,current:state.current}
            }
        case "addChoisen":
            {
                return {current:action.payload,photos:state.photos}
            }
        default:
            return state;
    }
}

export default photoReducer;