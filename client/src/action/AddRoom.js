import axios from 'axios';


export const postRoom = (obj) => async dispatch =>{
    console.log(obj);
    try{
       const body = JSON.stringify(obj); 
     //  axios.post('http://localhost:6001/room/add',body);

        // dispatch(loadUser());
        
    }catch(error){
        dispatch({ payload: error});
    }
}
// export const loginUser = (phone,password) => async dispatch =>{
//     try{
//         const config={
//             headers:{
//                 'Content-Type': 'application/json'
//             }
//         }
//         const body = JSON.stringify({phone,password});
//         const response= await axios.post('http://localhost:6001/account/login',body,config);
//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: response.data
//         });

//         dispatch(loadUser());
        
//     }catch(error){
//         dispatch({ type: LOGIN_FAIL,payload: error});
//     }
// }

// export const logOut =() => async dispatch =>{
//     dispatch({
//         type: LOG_OUT
//     })
// }
