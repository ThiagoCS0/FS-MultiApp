import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
	border: 0;
	margin: 0;
	padding: 0;
	user-select: none;
	text-align: center;
	box-sizing: border-box;
}

html {
	display: flex;
	color: #DDD;
	font-size: large;
	font-weight: bolder;
	justify-content: center;
	background-color: #444;
}

nav{
	height: fit-content;
}

ul{
	width:100%; 
	display:flex; 
	height: fit-content;
	justify-content:center;
}

#subMn{
background-color: #4448;
}

li{
	list-style:none;
	height: fit-content;
}

span{
	color: #C90;
}

.links {
	width: 100%;
	height: 100%;
	padding: 10px;
	display: flex;
	color: #DDD;
	align-items: center;
	text-decoration: none;
	justify-content: center;
	border-bottom: 1px solid #888;
}

.links:hover {
	color: #FA0;
	border-bottom: 2px solid #FA0;
}

form {
	top: 50%;
	gap: 10px;
	width: 70vw;
	display: flex;
	position: absolute;
	align-items: center;
	height: fit-content;
	flex-direction: column;
	justify-content: center;
}

form input{
	padding:30px;
	font-size: x-large;
}

.titulo {
	margin: 10px;
	color: #AAA;
	text-align: center;
	font-size: xx-large;
}

.titulo::first-letter {
	color: #FA0;
}

/* ------- DIVS ------- */

div {
	width: 100%;
	height: 100%;
	color: #CCC;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}

.divPrincipal{
	gap: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.divEntrada{
	display: flex;
	flex-direction: row;
}

.divResultadoH{
	gap:10px;
	height: 500px;
	display: flex;
	padding: 10px;
	max-width: 80vw;
	overflow-x: auto;
	overflow-y: hidden;
	flex-direction: row;
	justify-content: start;
	max-height: fit-content;
}
.divResultadoH div{
	height: 100%;
	display: flex;
	justify-content: start;
}

.selecionavel{
	user-select: all;
}

.divResultadoH img{
	background-color: #222;
	height:350px;
	width:250px;
}

.divResultadoV{
	display: flex;
	padding: 10px 0;
	align-items: start;
}
input {
	width: 100%;
	height: 50px;
	border: none;
	color: #FFF;
	outline: none;
	padding: 20px;
	font-size: x-large;
	background-color: #222;
}

button {
	border: 0;
	height: 50px;
	color: #FA0;
	display: block;
	cursor: pointer;
	font-size: larger;
	padding: 10px 20px;
	background-color: #000;
}

#erro{
	display: flex;
	color: #FA0;
	cursor: no-drop;
	transition: all 1s;
	font-size: xx-large;
	font-weight: bolder;
	align-items: center;
 animation-duration: 1s;
	justify-content: center;
 animation-name: erroCor;
 animation-iteration-count: infinite;
}

.rodape{
	left: 0;
	bottom: 0;
	width: 100%;
	position: absolute;
	height: fit-content;
}

.rodape a{
	padding: 10px;
}

.rodape img{
	height: 10px;
}

.divEntrada button{
width: fit-content;
}

.textoSainda{
	padding: 4px;
	color: #CCC; 
	font-size: large; 
}

select{
	border:0;
	height: 50px;
	outline:none; 
	color: #FA0;
	cursor: pointer;
	font-size: large;
	padding: 0 10px;
	text-align:center;
	background-color: #444;
}

#divPerguntaH{
	gap: 10px;
	display: flex;
	flex-direction: row;
}

#divPerguntaH button{
	color: #DDD;
	background-color: #444;
}


@media only screen and (max-width: 500px){
	
	.divEntrada{
		flex-direction: column;
	}
}
`;
export default EstiloGlobal;