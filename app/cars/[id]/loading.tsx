import { NextPage } from "next";
import styles from "./page.module.css";

const loadingPage: NextPage = () => {
	return <div className={styles.carPage_skeleton} />;
};

export default loadingPage;
