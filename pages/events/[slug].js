import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import { API_URL } from "@/config/index";
import EventMap from "@/components/EventMap";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import styles from "@/styles/Event.module.css";
import { useRouter } from "next/router";

export default function EventPage({ evt }) {
  const router = useRouter();

  return (
    <Layout title="Event">
      <div className={styles.event}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        <ToastContainer />
        {evt.image && (
          <div className={styles.image}>
            <Image
              src={
                evt.image
                  ? evt.image.formats.medium.url
                  : "/images/event-default.png"
              }
              alt="event"
              height={600}
              width={960}
            />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <EventMap evt={evt} />

        <Link href="/events">
          <a className={styles.back}>{"< "}Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  const paths = events.map((evt) => ({ params: { slug: evt.slug } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
      revalidate: 1,
    },
  };
}
