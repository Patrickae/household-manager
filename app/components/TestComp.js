import React from 'react'

class TestComp extends React.Component{
	constructor(){
		super()
	}

	render(){

	const switchLang= this.props.switchLang
	const lang = this.props.lang
	
		return(
			<button className="btn btn-primary" onClick={()=>{switchLang(lang)}}>{lang}</button>
			)
	}
}

export default TestComp