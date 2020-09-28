import {
  NOTE_GET_FAIL,
  NOTE_GET_REQ,
  NOTE_GET_SUCCESS,
  NOTE_SAVE_FAIL,
  NOTE_SAVE_REQ,
  NOTE_SAVE_SUCCESS,
} from "../actionType";
import axios from "axios";
export const noteSaveAction = (notes, date) => async (dispatch) => {
  try {
    dispatch({ type: NOTE_SAVE_REQ });
    const { data } = await axios.post("/api/savenotes", { notes, date });
    dispatch({ type: NOTE_SAVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: NOTE_SAVE_FAIL, payload: error });
  }
};
export const getAllSavedData = () => async (dispatch) => {
  try {
    dispatch({ type: NOTE_GET_REQ });
    const { data } = await axios.get("/api/getsaveddata");
    dispatch({ type: NOTE_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: NOTE_GET_FAIL, payload: error });
  }
};
