/**
 * @project ResumeAI
 * @file api.js
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default api