import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSavedData, noteSaveAction } from "../action/savenote";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../style/form.css";
import TextField from "@material-ui/core/TextField";

const FromComp = () => {
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  const noteStatus = useSelector((state) => state.userSavedStatus);
  const {loading,success,error} = noteStatus
// console.log(noteStatus)
  const dispatch = useDispatch();

  useEffect(() => {
    if (noteStatus) {
      setNotes("");
      setDate("");
    }
    dispatch(getAllSavedData());
  }, [noteStatus]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(noteSaveAction(notes, date));
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <TextField
          type="text"
          id="outlined-basic"
          label="Enter the  Here Your Qu"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          required={true}
          variant="outlined"
        />
        <TextField
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required={true}
        />
        <button type="submit" disabled={loading}  className="button primary">{loading && <CircularProgress size={15} />} Saved your Notes</button>
      </form>
    </div>
    
    
    
  );
};

export default FromComp;
