import Layout from "@/components/Layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { env } from "../../next.config";
import { EventsProps } from "@/components/Props/EventsProp";
import EventItem from "@/components/EventItem/EventItem";

export default function HomePage({ events }: EventsProps) {
	return (
		<Layout title="All Events" keywords=" All Events">
			<h1>EVENTS</h1>
			{events.length === 0 && <h3>No events to show</h3>}

			{events.map(event => (
				<EventItem key={event.id} event={event} />
			))}
		</Layout>
	);
}

// export const getServerSideProps: GetServerSideProps = async () => {
// 	const res = await axios.get(`${env.API_URL}/api/events`);
// 	const events = res.data;

// 	console.log(res.data);

// 	return {
// 		props: {
// 			events
// 		}
// 	};
// };

export const getStaticProps: GetStaticProps = async () => {
	const res = await axios.get(
		`${env.API_URL}/api/events?populate=*&_sort=date:ASC`
	);
	const events = res.data.data;

	return {
		props: {
			events
		},
		revalidate: 1
	};
};
