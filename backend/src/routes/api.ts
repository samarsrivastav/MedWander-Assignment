import express from 'express'
import complaint from './complaint'
import auth from './auth'
import verifyAuth from '../middleware'
const route = express.Router()


route.use('/complaint',verifyAuth, complaint)
route.use('/auth',auth)
export default route