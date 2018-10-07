import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearPhoto } from './../../actions/photo_show_actions';
import { submitPhoto } from './../../actions/photos_actions';
import { withRouter } from 'react-router-dom';


class PhotoForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      restaurantId: this.props.restaurant,
      photoFile: null,
      photoUrl: null,
      caption: "",
      instructions: "Choose a file to upload",
      // loadSuccess: false,
    };
  }

  handleInput(e) {
    this.setState({caption: e.currentTarget.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
          photoFile: file,
          photoUrl: fileReader.result
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ photoFile: null, photoUrl: "", caption: ""});
    }
  }

  // componentDidMount(){
  //   // debugger
  //   this.props.fetchRestaurant(this.props.match.params.restaurantId);
  // }


    handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('photo[photo_url]', this.state.photoUrl);
      formData.append('photo[restaurant_id]', this.state.restaurantId);
      formData.append('photo[caption]', this.state.caption);
      if (this.state.photoFile) {
        formData.append('photo[pic]', this.state.photoFile);
      }

      this.props.submitPhoto(formData).then(
        (response) => {
          this.setState({ instructions: response.message,  photoFile: null, photoUrl: "", caption: ""});
        },
        (response) => {
           this.setState({ instructions: response.message  });
        }
      );
    }

  render() {
    let preview = null;
    if (this.state.photoUrl) {
      preview = (
        <div>
          <h4>Preview </h4>
          <br></br>
          <img className='photo-form-preview-image' src={this.state.photoUrl} />
        </div>
      );
    }

    return (
        <div>
            <span className='photo-form-modal'>
              <span className='photo-form-modal-screen' onClick={() => {
                  props.history.push('/');
              }}>
              <span className='photo-form-modal-box' onClick={e => {
                    e.stopPropagation();
              }}>
              <span className='photo-form-span'>
                <h2>Add a Photo</h2>
                <p>{this.state.instructions}</p>
                <form onSubmit={this.handleSubmit}>


                  <input type="file"
                    className='photo-form-file-input'
                    onChange={this.handleFile}/>
                  <br></br>

                  <label htmlFor="caption">
                    <h4>Describe the Image: </h4>
                  </label>
                  <br></br>
                  <textarea rows="2" cols="45"
                    className='photo-form-textarea'
                    id="caption"
                    value={this.state.caption}
                    onChange={this.handleInput}/>
                  <br></br>
                    {preview}

                  <button className='photo-form-btn'> Post Photo</button>
                </form>

              </span>
            </span>
          </span>
        </span>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {

  return ({
    showPhoto: state.ui.showPhoto,
    restaurant: ownProps.history.location.pathname.split("/")[2],
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    // clearPhoto: () => dispatch(clearPhoto()),
    submitPhoto: (photo) => dispatch(submitPhoto(photo))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoForm));

//
// <input type="text"
//   id="caption"
//   value={this.state.caption}
//   onChange={this.handleInput}/>
