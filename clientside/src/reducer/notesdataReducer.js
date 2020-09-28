import {
  NOTE_GET_FAIL,
  NOTE_GET_REQ,
  NOTE_GET_SUCCESS,
  NOTE_SAVE_FAIL,
  NOTE_SAVE_REQ,
  NOTE_SAVE_SUCCESS,
} from "../actionType";

export const notesDataReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_SAVE_REQ:
      return { loading: true, success: false };
    case NOTE_SAVE_SUCCESS:
      return { loading: false, success: true, SavedData: action.payload };
    case NOTE_SAVE_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const fetchallDatareducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTE_GET_REQ:
      return { loading: true, success: false };
    case NOTE_GET_SUCCESS:
      return { loading: false, success: true, notes: action.payload };
    case NOTE_GET_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state
  }
};
