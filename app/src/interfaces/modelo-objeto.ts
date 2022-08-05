import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface ModeloObjeto<T> extends Imprimivel, Comparavel<T>{

}