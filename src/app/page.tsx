import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function HomePage() {
	return (
		<section>
			<div>
				<h1 className="text-white text-5xl">HomePage</h1>
			</div>
		</section>
	);
}

export default HomePage;
