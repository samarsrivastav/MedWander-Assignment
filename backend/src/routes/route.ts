import express from 'express'
import { addComplaint } from '../controller/complaint/addComplaint'
import { deleteComplaint } from '../controller/complaint/deleteComplaint'
import { readComplaint } from '../controller/complaint/readComplaint'
import { updateComplaint } from '../controller/complaint/updateComplaint'
import signin from '../controller/auth/signin'
import signup from '../controller/auth/signup'
import logout from '../controller/auth/logout'
const route = express.Router()

route.post('/add', addComplaint)
route.delete('/delete', deleteComplaint)
route.get('/get', readComplaint)
route.put('/update', updateComplaint)
route.post('/signin',signin)
route.post('/signup',signup)
route.post('/logout',logout)
export default route