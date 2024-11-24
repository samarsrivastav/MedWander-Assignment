import express from 'express'
import { addComplaint } from '../controller/complaint/addComplaint'
import { deleteComplaint } from '../controller/complaint/deleteComplaint'
import { readComplaint } from '../controller/complaint/readComplaint'
import { updateComplaint } from '../controller/complaint/updateComplaint'
const complaint = express.Router()

complaint.post('/add', addComplaint)
complaint.delete('/delete', deleteComplaint)
complaint.get('/get', readComplaint)
complaint.put('/update', updateComplaint)
export default complaint