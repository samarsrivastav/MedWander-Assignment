import express from 'express'
import { addComplaint } from '../controller/addComplaint'
import { deleteComplaint } from '../controller/deleteComplaint'
import { readComplaint } from '../controller/readComplaint'
import { updateComplaint } from '../controller/updateComplaint'
const route = express.Router()

route.post('/add', addComplaint)
route.delete('/delete', deleteComplaint)
route.get('/get', readComplaint)
route.put('/update', updateComplaint)

export default route