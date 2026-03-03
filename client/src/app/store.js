/**
 * @project ResumeAI
 * @file store.js
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/authSlice'

export const store = configureStore({
    reducer : {
        auth: authReducer
    }
})