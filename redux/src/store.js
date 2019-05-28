import {createStore} from "redux";
import {reduxReducer} from "./reducers/reduxReducer";

export const store = createStore(reduxReducer, {});