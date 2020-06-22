import React, { Component } from 'react';

class ImageSlider extends Component {
  constructor() {
    super();
    this.state = { currentSlideIndex: 0 };
  }

  render() {
    const { currentSlideIndex } = this.state;
    return <p>I am on slide {currentSlideIndex}</p>;
  }
}
export default ImageSlider;
