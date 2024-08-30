import { useState } from 'react'
import axios from 'axios';


export default function IPInfo() {
	const [IP, defIP] = useState('')
	const [saida, defSaida] = useState('')
	const Limpar = () => { defSaida(''); }
	const Busca = async () => {
		try {
			const resp = await axios.get(`https://ipinfo.io/${IP}/json?token=${import.meta.env.VITE_K_IPINFO}`)
			defSaida(resp.data);
		} catch (error) { Limpar(); }
	}
	// ipInfor.lookupASN("AS7922").then((resp) => { defSaida(resp); })
	return (
		<div className='divPrincipal'>
			<h1 className='titulo'>IP - Busca de infomações</h1>
			<div className='divEntrada'>
				<input value={IP} onChange={(e) => { defIP(e.target.value) }} placeholder='O IP....' onKeyDown={(e) => { if (e.key == "Enter") { Busca(); } }} />
				<button onClick={Busca}>Pesquisar</button>
			</div>
			<p style={{ margin: '10px 0', fontSize: 'large', padding: '4px' }} > faça a busca <span style={{ borderBottom: '1px solid #FA0' }}>vazia</span> para retornar <span>seu</span> ip</p>
			{
				saida && <div>
					<div className='divResultadoV'>
						<p>IP: <span>{saida.ip}</span></p>
						<p>Pais: <span>{saida.country}</span></p>
						<p>Região: <span>{saida.region}</span></p>
						<p>Cidade: <span>{saida.city}</span></p>
						<p>Nome do Host: <span>{saida.hostname}</span></p>
						<p>Localização: <span>{saida.loc}</span></p>
						<p>Fuso horário: <span>{saida.timezone}</span></p>
						<p>Org.: <span>{saida.org}</span></p>
						<p>Postal: <span>{saida.postal}</span></p>
					</div>
					<button onClick={Limpar}>Limpar</button>
				</div>
			}
		</div >
	)
}