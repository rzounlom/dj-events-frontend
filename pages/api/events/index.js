// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { events } from "./data";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(events);
  } else {
    res.setHeader('Allow, ["GET"]');
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
