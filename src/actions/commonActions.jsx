import {GLOBAL_LOADER, GLOBAL_ALERT, GLOBAL_ALERT_REMOVE} from '../actionsTypes/types';

import appstore from '../store/index';

export const globalLoader=(value)=>{

    appstore.dispatch({
        type:GLOBAL_LOADER,
        payload:value,
    })     

}

export const globalAlert=(alertType, msg)=>{
    appstore.dispatch({
        type:GLOBAL_ALERT,
        payload:alertType,
        msg:msg,
    }) 
}

export const globalAlertRemove=()=>{
    appstore.dispatch({
        type:GLOBAL_ALERT_REMOVE,
        
    }) 
}



