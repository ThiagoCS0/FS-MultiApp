import { useState } from 'react';

export default function Login() {
	const [nome, defNome] = useState(''), [senha, defSenha] = useState('');
	const Enviar = (e) => {
		e.preventDefault();
		if (nome == "l" && senha == "s") {
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
				</form>
			</div>
		</>
	)
}