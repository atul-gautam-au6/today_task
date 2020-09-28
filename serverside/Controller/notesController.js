import savedNoted from "../model/notesmodel";
export const getNotes = async (req, res) => {
    try {
        const { notes, date } = req.body;
        // console.log(notes,date)
    if ((!notes, !date)) {
      console.log("nothing here");
    }
    const notesData = new savedNoted({
      notes: notes,
      date: date,
    });
    // console.log(notesData)
    const newData = await notesData.save();
    
    // console.log(allSavedNotes)
    if (newData) {
      console.log("data saved success",newData);
      return res.status(201).send({ msg: "Your Notes Saved", newData });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllNotes = async(req,res)=>{
  try {
    const allSavedNotes = await savedNoted.find()
    return res.send(allSavedNotes)
  } catch (error) {
    console.log(error.message);
  }
}