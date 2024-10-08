import { useState } from 'react';

export default function Login() {
	const [nome, defNome] = useState(''), [senha, defSenha] = useState('');
	const Enviar = (e) => {
		e.preventDefault();
		if (nome == "Thiago" && senha == "Thiago") {
			localStorage.setItem('autentico', true);
			window.location.reload();
			}
		else { localStorage.setItem('autentico', false); defNome(''); defSenha('');}
	}

	return (
		<>
			<div>
				<form onSubmit={Enviar}>
					<h1 className='titulo'>Login</h1>
					<input name="nome" type="text" value={nome} onChange={(e) => { defNome(e.target.value) }} placeholder="Nome" autoComplete="username" required />
					<input name="senha" type="password" value={senha} onChange={(e) => { defSenha(e.target.value) }} placeholder="Senha" autoComplete="current-password" required />
					<button type="submit" style={{ alignSelf: 'end' }}>Acessar</button>
				<p style={{ position: 'absolute', left:'20px', bottom:'20px'}}>Login: <span>Thiago</span> - Senha: <span>Thiago</span></p>
				</form>
			</div>
		</>
	)
}