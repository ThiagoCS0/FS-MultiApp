import { createContext, useState } from "react";

export const Tema = createContext();

export const ProverTema = ({ children }) => {
	const [tema, defTema] = useState('claro');
	const mudarTema = () => { defTema(tema === 'claro' ? 'escuro' : 'claro'); };
	//compartilhar entre componentes
	return (<Tema.Provider value={{ tema, mudarTema }}>{children}</Tema.Provider>);
}