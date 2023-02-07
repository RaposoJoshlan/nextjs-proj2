// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { events } from "./data.json";

type Data = {
	events: {}[];
};

type DataNotFound = {
	message: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data | DataNotFound>
) {
	if (req.method === "GET") {
		res.status(200).json({ events: events });
	} else {
		res.setHeader("Allow", ["GET"]);
		res.status(405).json({ message: `Method ${req.method} not allowed` });
	}
}
