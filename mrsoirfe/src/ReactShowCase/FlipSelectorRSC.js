import React, { Component } from 'react';
import FlipSelector from '../FlipSelector';
import './FlipSelectorRSC.css';


class FlipSelectorRSC extends Component{
	constructor(props){
		super(props);
		
		this.setHour = this.setHour.bind(this);
		this.setMin  = this.setMin.bind(this);
		this.setSec  = this.setSec.bind(this);
		
		this.state = {
			hour: 8,
			min: 10,
			sec: 30
		};
	}
   componentDidMount(){
   	
	}
	setHour(hour){
		this.setState({hour});
	}
	setMin(min){
		this.setState({min});
	}
	setSec(sec){
		this.setState({sec});
	}
	ensureTowDigitString(x){
		return (x.length === 1) ? ('0' + x) : x;
	}
	render(){
		let hourValues = [];
		for(let i=0; i < 24; ++i){
			hourValues.push( '' + i + ' hours');
		}
		let minValues = [];
		let secValues = [];
		for(let i=0; i < 60; ++i){
			minValues.push( '' + i + ' minutes');
			secValues.push( '' + i + ' seconds');
		}
		
		let hour = this.state.hour;
		let min = this.state.min;
		let sec = this.state.sec;
		
		let indicatorString = 'selected: ' 
										 + this.ensureTowDigitString('' + hour) + ' : ' 
										 + this.ensureTowDigitString('' + min)  + ' : ' 
										 + this.ensureTowDigitString('' + sec);
		
		const heading = 'Flip Selector';
		const description = <div>
			This selector makes it easy to select a value within a predetermined range. 
			Especially on mobile devices it is much more comfortable to use than
			most other input components.<br/><br/>
			If you hold the up (down) button pressed, the value keeps incrementing
			(decrementing) at a fast pace.
		</div>;
		
		return (
			<div className="FlipSelectorRSC">
				<div className="HeadingRSC">
					{heading}
				</div>
				<div className="DescriptionRSC">
					{description}
				</div>
				<div className="FlipSelectorFlexRSC">
					<div className="FlipSelectorDiv">
						<FlipSelector
							values={hourValues}
							selectedId={this.state.hour}
							onIndexSelected={this.setHour}
						/>
					</div>
					<div className="FlipSelectorDiv">
						<FlipSelector
							values={minValues}
							selectedId={this.state.min}
							onIndexSelected={this.setMin}
						/>
					</div>
					<div className="FlipSelectorDiv">
						<FlipSelector
							values={secValues}
							selectedId={this.state.sec}
							onIndexSelected={this.setSec}
						/>
					</div>
				</div>
				<div className="IndicatorDivRSC">
					{indicatorString}
				</div>
			</div>
		);
	}
}

export default FlipSelectorRSC;

	