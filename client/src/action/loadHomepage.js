// import axios from 'axios';
// export const LOAD_USER = 'LOAD_USER'

// export const background= () => async dispatch =>{
//     const response = await axios.get('http://localhost:6001/Add');
//     dispatch({
//         type: LOAD_USER,
//         payload: response.data
//     })
//     const re = JSON.parse(response);
//     console.log(re);
       
// }

// background(){
//     // Where we're fetching data from
//     fetch(`http://localhost:6001/Add`)
//       // We get the API response and receive data in JSON format...
//       .then(response => response.json())
//       // ...then we update the users state
//       .then(data =>
//         this.setState({
//           users: data,
//           isLoading: false,
//         })
//       )
//       // Catch any errors we hit and update the app
//       .catch(error => this.setState({ error, isLoading: false }));
//   }