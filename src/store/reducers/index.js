import { combineReducers } from "redux";
import login from './loginReducer';
import balance from './balanceReducer';
import history from './historyReducer'
import communityOfficer from "./communityOfficerReducer";
import request from "./requestReducer";
import dataRequest from "./dataRequest";
import dataCo from "./detailCoReducer";
import dataObjectCO from "./detailCoReducerObject";

export default combineReducers({
  login,
  balance,
  history,
  communityOfficer,
  request,
  dataRequest,
  dataCo,
  dataObjectCO,
});
