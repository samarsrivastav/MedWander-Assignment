import express from 'express'
import complaint from './complaint'
import auth from './auth'
const route = express.Router()


route.use('/complaint', complaint)
route.use('/auth',auth)
export default route