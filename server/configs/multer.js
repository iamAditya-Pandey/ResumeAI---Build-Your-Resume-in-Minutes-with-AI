/*
 * @project ResumeAI
 * @file multer.js
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import multer from "multer";


const storage = multer.diskStorage({});

const upload = multer({storage})

export default upload