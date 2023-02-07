export interface EventsProps {
	events: {
		id: string;
		attributes: {
			name: string;
			slug: string;
			venue: string;
			address: string;
			performers: string;
			date: Date;
			time: string;
			description: string;
			image: image;
		};
	}[];
}

interface image {
	data: {
		attributes: {
			formats: {
				thumbnail: {
					url: string;
				};
			};
		};
	};
}
