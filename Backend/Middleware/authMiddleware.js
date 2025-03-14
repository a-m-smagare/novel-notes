import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Auth Header:", authHeader);  

  if (!authHeader) {
    console.log("No token found in request.");
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1]; 
  console.log("Extracted Token:", token); 

  if (!token) {
    console.log("Invalid token format.");
    return res.status(401).json({ message: "Access denied. Invalid token format." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);  
    req.user = decoded;  
    next();
  } catch (error) {
    console.log("Token verification failed:", error);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

export default authMiddleware;
