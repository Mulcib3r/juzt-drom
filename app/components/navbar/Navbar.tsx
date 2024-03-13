"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
	{ name: "Главная", href: "/" },
	{ name: "Автомобили", href: "/cars" },
];

export default function Navbar() {
	const pathname = usePathname();
	return (
		<nav className={styles.navbar}>
			{links.map((link) => (
				<Link
					key={link.name}
					href={link.href}
					className={clsx(styles.navbarLink, {
						[styles.navbarLink_active]: pathname === link.href,
					})}
				>
					{link.name}
				</Link>
			))}
		</nav>
	);
}
