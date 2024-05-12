import {TYPE_LOG} from './constants'
function logger(log, type = TYPE_LOG){
    console[type](log);
}   
// export default  chỉ sử dụng cho 1 module 
export default logger;