import Link from "next/link";
import ButtonAuth from "./buttonAuth";
import Image from "next/image";
import Logo from "../../../public/DescuentosYa_Logo_Solo_Texto.png";

function Navbar() {
	return (
		<header className="bg-white border-gray-200 dark:bg-gray-900">
			<nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
				<Link href="/">
					<Image
						src={Logo}
						alt="DescuentoYa Logo"
						height={100}
						width={150}
					/>
				</Link>
				<div className="flex items-center space-x-6 rtl:space-x-reverse">
					<Link href="/users">Users</Link>
					<ButtonAuth />
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
