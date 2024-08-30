import axios from "axios"
import { useState } from "react"


export default function Filmes() {
	const [filmes, defFilmes] = useState([])
	const [consulta, defConsulta] = useState('')
	const Busca = async () => {
		try {
			// const res = await axios.get(`https://www.omdbapi.com/?s=${consulta}&apikey=${import.meta.env.VITE_K_OMDBAPI}`);
			// defFilmes(res.data.Search)
			const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_K_TMDB}&query=${consulta}&language=pt-BR`);
			defFilmes(res.data.results)
		} catch (error) {
		}
	}
	return (
		<>
			<div className="divPrincipal">
				<h1 className="titulo">Filmes - Lista de filmes</h1>
				<div className="divEntrada">
					<input type="type" value={consulta} onChange={(e) => { defConsulta(e.target.value) }} onKeyDown={(e) => { if (e.key === "Enter") { Busca() } }} placeholder="Nome do filme..." />
					<button onClick={Busca}>Pesquisar</button>
				</div>
				<div>
					<div className="divResultadoH">
						{filmes && filmes.map((filme) => (
							<div>
								{/* <Img src=${filme.Poster} alt={`${filme.Title} Poster`} /> */}
								<img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt={`${filme.title} Poster`} />
								<h3 className="selecionavel"><span>{filme.title}</span></h3>
								<p>{filme.release_date}</p>
							</div>
						))}
					</div>
				</div>
			</div >
			<div className="rodape"><a href="https://www.themoviedb.org/" target="_black"><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" alt="Atribuição" title="Atribuição" /></a></div>
		</>
	)
}