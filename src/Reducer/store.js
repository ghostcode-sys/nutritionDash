import {configureStore} from "@reduxjs/toolkit"
import userProfile from "./userProfile"
export default configureStore({
    reducer:{
        userProfile
    }
})