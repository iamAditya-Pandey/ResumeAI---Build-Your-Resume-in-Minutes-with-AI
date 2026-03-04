/*
 * @project ResumeAI
 * @file aiRoutes.js
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import express from "express";
import protect from "../middlewares/authMiddleware.js";
import { enhanceJobDescription, enhanceProfessionalSummary, uploadResume} from "../controllers/aiController.js";



const aiRouter = express.Router();


aiRouter.post('/enhance-pro-sum', protect, enhanceProfessionalSummary)
aiRouter.post('/enhance-job-desc', protect, enhanceJobDescription)
aiRouter.post('/upload-resume', protect, uploadResume)

export default aiRouter