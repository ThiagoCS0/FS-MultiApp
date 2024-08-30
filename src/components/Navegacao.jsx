import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navegacao() {
	const [subNv, setSubNv] = useState(false);
	return (
		<nav>
				<ul>
					<li> <Link className="links" onClick={() => { setSubNv(false) }} to="/FS-MultiApp/filmes">FILMES</Link> </li>
					<li> <Link className="links" onClick={() => { setSubNv(!subNv) }}>FERRAMENTAS</Link>
						<ul id="subMn" style={{ display: subNv ? 'flex' : 'none' }}>
							<li> <Link className="links" to="/FS-MultiApp/ipinfor">IP Infor</Link> </li>
							<li> <Link className="links" to="/FS-MultiApp/qrcode">QR Code</Link> </li>
							<li> <Link className="links" to="/FS-MultiApp/tradutor">Tradutor</Link> </li>
						</ul>
					</li>
					<li> <Link className="links" onClick={() => { setSubNv(false) }} to="/FS-MultiApp/abcd">ERRO</Link> </li>
					<li> <Link className="links" onClick={() => { setSubNv(false); localStorage.setItem('autentico', false); window.location.href = '/FS-MultiApp'; }}>SAIR</Link> </li>
				</ul>
		</nav>
	)
}