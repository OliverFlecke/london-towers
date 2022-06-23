import type { NextApiRequest, NextApiResponse } from "next";
import { towers } from "../../src/components/Tower";
import TowerRepository from "../../src/TowerRepository";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Handling request to /api/tower`);
  switch (req.method) {
    case "GET":
      {
        const repository = await TowerRepository.create();
        const towers = await repository.getTowers();
        res.status(200).json(towers);
      }
      break;
    case "POST":
      {
        const repository = await TowerRepository.create();
        try {
          await repository.addTowers(towers);
          res.status(201).send(null);
        } catch (e) {
          if (e instanceof Error) {
            res.status(400).send(e.message);
          } else {
            res.status(500).send("Unknown error occurred");
          }
        }
      }
      break;

    default:
      console.warn(`Unhandled method`);
      res.status(405).send("Method not allowed");
      break;
  }
}

export default handler;
