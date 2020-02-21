import axios from 'axios';
export default class RegistryService {
    obtenerResultado = async () => {
        return axios.get('http://localhost:3000/user');
    }
    saveUser = async (userDTO) => {
        return axios.post('http://localhost:3000/user',userDTO);
    }
}