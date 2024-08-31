import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react';
import Navegacao from './Navegacao';

export default function QRCode() {
	const [texto, defTexto] = useState('')
	return (
		<>
		<Navegacao />
		<div className='divPrincipal'>
			<h1 className='titulo'>QRCode</h1>
			<input type="text" value={texto} onChange={e => { defTexto(e.target.value) }} />
			<QRCodeSVG value={texto} />
		</div>
		</>
	)
}