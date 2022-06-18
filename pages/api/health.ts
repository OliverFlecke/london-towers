import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Perform health check`);

  res.status(200).send(null);
}

export default handler;
