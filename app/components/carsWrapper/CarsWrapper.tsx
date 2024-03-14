import { getCars } from "@/app/services/dromApi";
import Cars from "../cars/Cars";

export default async function CarsWrapper({
	currentPage,
}: {
	currentPage: number;
}) {
	let vechs = await getCars(currentPage);
	return <Cars vechs={vechs} />;
}
