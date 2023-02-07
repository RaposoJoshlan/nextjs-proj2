import Layout from "@/components/Layout/Layout";
import { EventProps } from "@/components/Props/EventProp";
import { env } from "@/next.config";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import EventDetails from "@/components/EventDetails/EventDetails";

export default function EventDetailPage({ event }: EventProps) {
	return (
		<Layout title="event">
			<EventDetails event={event} />
		</Layout>
	);
}

// export const getServerSideProps: GetServerSideProps = async context => {
// 	const id = context.query.id;

// 	const res = await axios.get(`${env.API_URL}/api/events/${id}`);

// 	const event = await res.data.events[0];

// 	return {
// 		props: {
// 			event: event
// 		}
// 	};
// };

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await axios.get(`${env.API_URL}/api/events?populate=*`);
	const events = res.data.data;

	const paths = events.map((event: { attributes: { slug: string } }) => ({
		params: { slug: `${event.attributes.slug}` }
	}));

	return {
		paths,
		fallback: true
	};
};

export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) => {
	const slug = context.params!.slug;

	const res = await axios.get(
		`${env.API_URL}/api/events?filters[slug]slug=${slug}&populate=*`
	);

	const event = await res.data.data;

	return {
		props: {
			event: event[0]
		},
		revalidate: 1
	};
};
