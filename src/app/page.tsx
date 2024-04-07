import Image from "next/image";
import Logo from "../../public/Descuentosya_1.png";

async function HomePage() {
	return (
		<main className=" bg-white dark:bg-gray-900 ">
			<section className=" grid  px-4 py-8 mx-auto grid-cols-4 ">
				<div className="mr-auto place-self-center col-span-2">
					<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none  dark:text-white">
						Bienvenidos a Descuentos Ya
					</h1>
					<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
						Elegimos poner el aguara guazu en el logo de nuestra aplicacion ya
						que es un animal, que si bien se encuentra en otras provincias, es
						mucho mas mencionado dentro de la cultura formoseña y paraguaya,
						como su nombre lo indica, zorro grande, proveniente del guarani
					</p>
				</div>

				<Image
					className=" object-cover place-self-center col-span-2"
					src={Logo}
					alt="Descuento ya"
				/>
			</section>
		</main>
	);
}

export default HomePage;
