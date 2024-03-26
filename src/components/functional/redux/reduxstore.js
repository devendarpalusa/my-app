
import { composeWithDevTools } from "redux-devtools-extension";
import { Reducercounter } from "./reducer";
// import {legacy_createStore} from "./reducer"

import { legacy_createStore } from "redux";




 const reduxStore=legacy_createStore(Reducercounter)
 export default reduxStore