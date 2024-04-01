import { cookies } from "next/headers";
import LoginForm from "../components/loginForm/loginForm";
import { redirect } from "next/navigation";

async function HomePage() {
	return (
		<section>
			<div>
				<h1 className="text-white text-5xl"></h1>
				<LoginForm></LoginForm>
			</div>
		</section>
	);
}

export default HomePage;
