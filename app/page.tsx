import Cars from "./components/cars/Cars";
import { Suspense } from "react";

export default function Home() {
	return (
		<>
			<Suspense fallback={<div>todo:skeleton</div>}>
				<Cars />
			</Suspense>
		</>
	);
}
