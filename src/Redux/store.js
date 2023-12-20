import { reducer } from "./products/reducer";
import {legacy_createStore} from "redux";


export const store = legacy_createStore(reducer);