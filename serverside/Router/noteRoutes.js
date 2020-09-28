import { Router } from "express";
import { getAllNotes, getNotes } from "../Controller/notesController";
const route = Router();

route.post("/api/savenotes", getNotes);
route.get('/api/getsaveddata',getAllNotes)

export default route;
