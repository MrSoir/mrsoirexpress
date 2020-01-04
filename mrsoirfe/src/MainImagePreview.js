import React, { Component } from 'react';
import LoadingImage from './LoadingImage';
import './MainImagePreview.css';


class MainImagePreview extends Component{
	constructor(props){
		super(props);

		this.onPreviewClicked = this.onPreviewClicked.bind(this);
		this.genIndicator = this.genIndicator.bind(this);
	}
	genIndicator(){
		let {heading, description} = this.props.indicator;

		let focusPreview = window.mobilecheck() || this.props.focusPreview;
		let prevImgInctrDivClass = focusPreview ? "PreviewImageIndicatorDiv FocusedLeftMIP" : "PreviewImageIndicatorDiv";
		return (
			<div className={prevImgInctrDivClass}>
				<div className="PreviewImageIndicatorHeadingDiv">
					<div className="PreviewImageIndicatorHeading">
						{heading}
					</div>
				</div>
				<div className="PreviewImageIndicatorDescriptionDiv">
					<div className="PreviewImageIndicatorDescription">
						{description}
					</div>
				</div>
			</div>
		);
	}
	onPreviewClicked(){
		if(this.props.onPreviewClicked){
			this.props.onPreviewClicked();
		}
	}
	render(){
		let indicator = "";
		let imgClass = "ImagePreviewImage";
		if(!!this.props.indicator){
			indicator = this.genIndicator();

			if(this.props.focusPreview){
				imgClass += " FocusedScaledMIP";
			}
		}

		return (
			<div className="ImagePreviewContainer">
				<div className="ImagePreviewIndicatedImage"
					  onClick={this.onPreviewClicked}>
					<div className={imgClass}>
						<LoadingImage src={this.props.meta.image_path}/>
					</div>
					{indicator}
				</div>
			</div>
		);
	}
}

export default MainImagePreview;
