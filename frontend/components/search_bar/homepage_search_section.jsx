// search bar
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBar from './search_bar';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class HomepageSearchSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImage: window.staticImages.restBanner01,
      bannerImageIterator: 0,
      imagesArray: [
        window.staticImages.restBanner01,
        window.staticImages.restBanner02,
        window.staticImages.restBanner03,
        window.staticImages.restBanner04
      ],
      setSlideShowTimeout: null
    };
  }

  componentDidMount() {
    let setSlideShowTimeout = setInterval(() => {
      const newBannerIterator = (this.state.bannerImageIterator + 1) % 4;
      this.setState({bannerImage: this.state.imagesArray[newBannerIterator],
                bannerImageIterator: newBannerIterator})
    }, 5000)
  }

  // componentWillMount() {
  //   if (this.state.setSlideShowTimeout) {
  //     console.log(this.state.setSlideShowTimeout());
  //   }
  // }





  render() {

    let backgroundPhoto = `url(${this.state.bannerImage})`;
    return (
      <div className='home-div-behind-slideshow'>

            <fieldset className='home-search-box' style={{backgroundImage: backgroundPhoto}}>
              <h2 className='home-search-message'>
                Find your table for any occasion
              </h2>
              <SearchBar />
            </fieldset>
      </div>
    );
  }

};


export default HomepageSearchSection;


//
// <ReactCSSTransitionGroup
//   transitionName="example"
//   transitionEnterTimeout={500}
//   transitionLeaveTimeout={300}>
// </ReactCSSTransitionGroup>
