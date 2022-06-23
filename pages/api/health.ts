import type { NextApiRequest, NextApiResponse } from "next";

const version = "0.1.0";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Perform health check. ${version}`);

  res.status(200).send({
    version,
  });
}

export default handler;
