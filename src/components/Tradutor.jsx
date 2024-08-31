import axios from 'axios'
import { useState } from "react";
import Navegacao from './Navegacao';

export default function Tradutor() {

	const [texto, defTexto] = useState(''); const [textoSaida, defSaida] = useState('');
	const [lingOrigem, defLingOrigem] = useState('en'); const [lingSaida, defLingSaida] = useState('pt');

	const Traduzir = async () => {
		try {
			const resp = await axios.get(`https://api.mymemory.translated.net/get`, { params: { q: texto, langpair: `${lingOrigem}|${lingSaida}` } });
			defSaida(resp.data.responseData.translatedText);
		} catch (error) { defSaida(`Erro ao traduzir: "${error}"`); }
	}
	const MudarLinguagem = () => {
		const lingS = lingSaida;
		defLingSaida(lingOrigem)
		defLingOrigem(lingS);
	}
	return (
		<>
		<Navegacao />
		<div className='divPrincipal'>
			<h1 className='titulo'>Tradutor</h1>
			<div id='divPerguntaH'>
				Do <select value={lingOrigem} onChange={(e) => { defLingOrigem(e.target.value) }}>
					<option value="en">English</option><option value="es">Spanish</option>
					<option value="fr">French</option><option value="de">German</option>
					<option value="it">Italiano</option><option value="pt">Português</option>
				</select>
				<button onClick={MudarLinguagem}>&#8596; para &#8596;</button>
				<select value={lingSaida} onChange={(e) => { defLingSaida(e.target.value) }}>
					<option value="en">English</option><option value="es">Spanish</option>
					<option value="fr">French</option><option value="de">German</option>
					<option value="it">Italiano</option><option value="pt">Português</option>
				</select>
			</div>
			<div>
				<div>
					<div className='divEntrada'>
						<input value={texto} onChange={(e) => { defTexto(e.target.value) }} onKeyDown={(e) => { if (e.key == "Enter") { Traduzir(); } }} type="text" placeholder='Texto a ser traduzido...' />
						<button onClick={Traduzir}>Tradutor</button>
					</div>
					{textoSaida && <p className='textoSaida selecionavel'>{textoSaida}</p>}
				</div>
			</div>
		</div >
		</>
	)
}