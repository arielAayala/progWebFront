"use client";
import React, {
	useContext,
	createContext,
	useState,
	useMemo,
	useCallback,
} from "react";

const authContext = createContext({
	user: null,
});

function AuthContextProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState(null);

	const iniciarSesion = useCallback(
		(inputs: { nameUser: string; password: string }) => {
			fetch("http://localhost/progWeb/api/Auth/SignIn.php", {
				method: "POST",
				credentials: "include",
				body: JSON.stringify(inputs),
			})
				.then(async (res) => {
					if (!res.ok) {
						throw new Error("ocurrio un error", {
							cause: await res.json(),
						});
					}
					return res.json();
				})
				.then((res) => {
					setUser(res.data);
					console.log(res.msg);
				})
				.catch((error) => {
					const errorMessage = error.cause?.error || "Error en el servidor";
					console.error(errorMessage);
				});
		},
		[]
	);

	const values = useMemo(
		() => ({
			user,
			iniciarSesion,
		}),
		[user, iniciarSesion]
	);

	return <authContext.Provider value={values}>{children}</authContext.Provider>;
}

const useAuthContext = () => useContext(authContext);

export { AuthContextProvider, useAuthContext };
