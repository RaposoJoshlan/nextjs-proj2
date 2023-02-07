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
	const filteredEv = events.filter(ev => ev.slug === req.query.slug);

	if (filteredEv.length === 0) {
		res.status(404).json({ message: `404. Not found` });
	} else if (req.method === "GET") {
		res.status(200).json({ events: filteredEv });
	} else {
		res.setHeader("Allow", ["GET"]);
		res.status(405).json({ message: `Method ${req.method} not allowed` });
	}
}
