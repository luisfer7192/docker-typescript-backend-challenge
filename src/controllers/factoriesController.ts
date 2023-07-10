import { Request, Response } from "express";
import fs from "fs";
import path from "path";

type FactoryChartData = {
  sprocket_production_actual: number[];
  sprocket_production_goal: number[];
  time: number[];
};

type Factory = {
  id?: number;
  factory: {
    chart_data: FactoryChartData;
  };
};

const factoryDataPath = path.join(
  __dirname,
  "../models/seed_factory_data.json"
);

export const getFactories = async (req: Request, res: Response) => {
  const data = fs.readFileSync(factoryDataPath);
  const factories: Factory[] = JSON.parse(data.toString()).factories;
  res.json(factories);
};

export const getFactoryById = async (req: Request, res: Response) => {
  const data = fs.readFileSync(factoryDataPath);
  const factories: Factory[] = JSON.parse(data.toString()).factories;
  const factory = factories.find((f) => f.id === Number(req.params.id));

  if (!factory) {
    return res.status(404).json({ message: "Factory not found" });
  }

  res.json(factory);
};
