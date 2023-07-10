import { Request, Response } from "express";
import fs from "fs";
import path from "path";

type Sprocket = {
  id?: number;
  teeth: number;
  pitch_diameter: number;
  outside_diameter: number;
  pitch: number;
};

const sprocketDataPath = path.join(
  __dirname,
  "../models/seed_sprocket_types.json"
);

export const getSprockets = async (req: Request, res: Response) => {
  const data = fs.readFileSync(sprocketDataPath);
  const sprockets: Sprocket[] = JSON.parse(data.toString()).sprockets;
  res.json(sprockets);
};

export const getSprocketById = async (req: Request, res: Response) => {
  const data = fs.readFileSync(sprocketDataPath);
  const sprockets: Sprocket[] = JSON.parse(data.toString()).sprockets;
  const sprocket = sprockets.find((s) => s.id === Number(req.params.id));

  if (!sprocket) {
    return res.status(404).json({ message: "Sprocket not found" });
  }

  res.json(sprocket);
};

export const createSprocket = async (req: Request, res: Response) => {
  const newSprocket: Sprocket = req.body;

  const data = fs.readFileSync(sprocketDataPath);
  const sprockets: Sprocket[] = JSON.parse(data.toString()).sprockets;

  sprockets.push(newSprocket);
  fs.writeFileSync(sprocketDataPath, JSON.stringify({ sprockets }));

  res.status(201).json(newSprocket);
};

export const updateSprocket = async (req: Request, res: Response) => {
  const updatedSprocket: Sprocket = req.body;

  const data = fs.readFileSync(sprocketDataPath);
  const sprockets: Sprocket[] = JSON.parse(data.toString()).sprockets;
  const sprocketIndex = sprockets.findIndex(
    (s) => s.id === Number(req.params.id)
  );

  if (sprocketIndex === -1) {
    return res.status(404).json({ message: "Sprocket not found" });
  }

  sprockets[sprocketIndex] = updatedSprocket;
  fs.writeFileSync(sprocketDataPath, JSON.stringify({ sprockets }));

  res.json(updatedSprocket);
};
