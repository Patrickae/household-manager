import React from 'react'
import TestComp from './TestComp'


class Main extends React.Component{
	constructor(){
		super()
		this.state={
			firstWord: 'Hello',
			secondWord: 'World!'
		}
	this.switchLang = this.switchLang.bind(this);
	}

	switchLang(lang){

		lang === 'Spanish'? 
		this.setState({firstWord:'Hola', secondWord:'Mundo!' }): 
		lang === "French"?
		this.setState({firstWord:'Bonjour', secondWord:'Le Monde!' }): 
		lang === "Samoan"?
		this.setState({firstWord:'alofa fiafia i', secondWord:'le lalolagi!' }): 
		this.setState({firstWord:'Hello', secondWord:'World!' })
		
	}
	render(){
		return(
			<div className='container'>
			<h1>{this.state.firstWord} {this.state.secondWord}</h1>

			<TestComp lang='English' switchLang={this.switchLang}/>
			<TestComp lang='Spanish' switchLang={this.switchLang}/>
			<TestComp lang='French' switchLang={this.switchLang}/>
			<TestComp lang='Samoan' switchLang={this.switchLang}/>
			

			</div>
			)
	}
}

export default Main;