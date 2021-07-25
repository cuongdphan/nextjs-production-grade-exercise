import { NextApiRequest, NextApiResponse } from "next";
import type { Query } from "types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { route } = req.query as Query;

  res.setPreviewData({});
  res.redirect(route);
}
