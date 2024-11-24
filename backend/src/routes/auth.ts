import express from 'express'
import signin from '../controller/auth/signin'
import signup from '../controller/auth/signup'
import logout from '../controller/auth/logout'
const auth = express.Router()

auth.post('/signin',signin)
auth.post('/signup',signup)
auth.post('/logout',logout)
export default auth