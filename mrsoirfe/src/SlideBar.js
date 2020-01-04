import React, { Component } from 'react';
import './SlideBar.css';


class SlideBar extends Component{
	constructor(props){
		super(props);
		
		this.onMouseUp = this.onMouseUp.bind(this);
		
		this.slideBar = React.createRef();
	}
	onMouseUp(e){
		const val = e.target.value / 100;
		if(this.props.onMouseUp){
			this.props.onMouseUp(val);
		}
	}
	render(){
		let showIndicator = this.props.indicatorValue !== undefined;
		let indicator;
		if( showIndicator ){
			let val = !!this.props.indicatorValue ? this.props.indicatorValue * 100 : 0;
			let style = {
				left: '' + val + '%',
			};
			indicator = 
				(
					<div className="IndicatorBarDivSB">
						<div className="IndicatorBarRulerSB" style={style}
							  ref={this.rf}>
						</div>
					</div>
				);
		}
		
		return (
		<div className="SlideBarDivSB">
			<div className="SliderBarLabel SliderBarCentered">
				{this.props.label ? this.props.label : ""}
			</div>
			{showIndicator ? indicator : ""}
			<input type="range"
				ref={this.slideBar}
				min="0"
				max="100"
				value={this.props.sliderVal * 100}
				className="SlideBar SliderBarCentered"

				onChange={this.onMouseUp}
			/>
		</div>
		);
	}
}

export default SlideBar;