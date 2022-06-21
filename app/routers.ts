import express, { Request, Response } from "express";
import cors from "cors";

const router = express.Router();
router.use(cors());
router.use(express.urlencoded({ extended: true, limit: "5m" }));
router.get("/health-check", (_req: Request, res: Response) => {
  const healthData = {
    uptime: process.uptime(),
    status: "pass",
    date: new Date(),
  };

  res.send(healthData);
});

export default router;
