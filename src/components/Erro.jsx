import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Erro() {
	const [subNv, setSubNv] = useState(false);
	return (
		<>
			<Link className="links" to="/FS-MultiApp/filmes">INICIO</Link>		
			<h3>Página não encontrada</h3>
			<h1 id="erro">Erro 404!</h1>
		</>
	)
}