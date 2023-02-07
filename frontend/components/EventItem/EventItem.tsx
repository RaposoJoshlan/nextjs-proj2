import Image from "next/image";
import Link from "next/link";
import { EventProps } from "../Props/EventProp";
import styles from "./EventItem.module.css";

export default function EventItem({ event }: EventProps) {
	return (
		<div className={styles.event}>
			<div className={styles.img}>
				<Image
					src={event.attributes.image.data.attributes.formats.thumbnail.url}
					width={170}
					height={100}
					alt={event.attributes.name}
				/>
			</div>
			<div className={styles.info}>
				<span>
					{new Date(event.attributes.date).toLocaleDateString("en-US")} at
					{event.attributes.time}
				</span>
				<h3>{event.attributes.name}</h3>
			</div>
			<div className={styles.link}>
				<Link href={`/events/${event.attributes.slug}`}>
					<button className="btn">Details</button>
				</Link>
			</div>
		</div>
	);
}
