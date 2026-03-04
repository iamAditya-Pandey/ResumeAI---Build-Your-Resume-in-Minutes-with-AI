/*
 * @project ResumeAI
 * @file authMiddleware.js
 * @author Aditya Pandey
 * @github https://github.com/iamAditya-Pandey
 * * Copyright (c) 2026 Aditya Pandey. All rights reserved.
 */

import jwt from 'jsonwebtoken'

const protect = async (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

export default protect;