import { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData();
  res.end("preview mode disabled");
}
