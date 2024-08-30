import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const autentico = localStorage.getItem('autentico')

export default function Navegacao() {
	const [subNv, setSubNv] = useState(false);
	return (
		<nav>
			{autentico == "true" &&
				<ul>
					<li> <Link className="links" onClick={() => { setSubNv(false) }} to="/filmes">FILMES</Link> </li>
					<li> <Link className="links" onClick={() => { setSubNv(!subNv) }}>FERRAMENTAS</Link>
						<ul id="subMn" style={{ display: subNv ? 'flex' : 'none' }}>
							<li> <Link className="links" to="/ipinfor">IP Infor</Link> </li>
							<li> <Link className="links" to="/qrcode">QR Code</Link> </li>
							<li> <Link className="links" to="/tradutor">Tradutor</Link> </li>
						</ul>
					</li>
					<li> <Link className="links" onClick={() => { setSubNv(false) }} to="/abcd">ERRO</Link> </li>
					<li> <Link className="links" onClick={() => { setSubNv(false); localStorage.setItem('autentico', false); window.location.href = '/'; }}>SAIR</Link> </li>
				</ul>}
		</nav>
	)
}