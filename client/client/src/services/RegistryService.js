import axios from 'axios';
 /*class RegistryService{
    obtenerlistado = () =>{
    return axios.get(`http://localhost:3000/user`)
    ;}
}
export default RegistryService
 }*/
 export const RegistryService = {
    obtenerlistado : () =>{
        return axios.get(`http://localhost:3000/user`)
        ;}
 }