/*
 * @project ResumeAI
 * @file ai.js
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import OpenAI from "openai";


const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
});


export default ai