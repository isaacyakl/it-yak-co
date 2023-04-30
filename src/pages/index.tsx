import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>IT Yak - Providing managed cloud services and consulting</title>
				<meta name="description" content="Providing managed cloud services and consulting" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
			<main className={styles.main}>
				<Hero></Hero>

				<ul>
					<li>M365</li>
					<li>Network monitoring</li>
					<li>System patching</li>
				</ul>
			</main>
			<Footer></Footer>
		</>
	);
}
