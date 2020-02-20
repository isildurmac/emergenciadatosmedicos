import { combineReducers } from "redux";
import reductorAutenticacion from "./reductorAutenticacion";
import reductorError from "./reductorError";


export default combineReducers({
   autenticacion: reductorAutenticacion,
   errors: reductorError
});