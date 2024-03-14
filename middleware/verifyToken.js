import { auth } from "../firebase_key.js";

export default async function verifyToken(req, res, next) {
  const bearerHeader = req.headers["bearer"];

  if(bearerHeader === undefined){
    return res.status(403).json({
        status: "Failed",
        code: "auth/no-token",
        message : "Please provide token"
    })
  }

  try {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const verifyToken = await auth.verifyIdToken(bearerToken);
    next();
  } catch (error) {
    if (error.code === "auth/argument-error" || bearerHeader === undefined) {
      return res.status(403).json({
        status: "Failed",
        code: "auth/argument-error",
        message: "Unauthorized Access"
      });
    } else if (error.code === "auth/id-token-expired") {
      return res.status(403).json({
        status: "Failed",
        code: "auth/id-token-expired",
        message: "Your token is expired please login again...",
      });
    } else {
      return res.status(500).json({
        status: "Failed",
        code: "auth/internal-error",
        message: error.message
      });
    }
  }
}
