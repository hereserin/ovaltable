import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearPhoto } from './../../actions/photo_show_actions';
import { withRouter } from 'react-router-dom';


class PhotoForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      photoFile: null,
      photoUrl: null,
      caption: ""
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
    }
  }

  componentDidMount(){
    // debugger
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }


  const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
return (


  render() {
    if (this.props.restaurant.photos == undefined) return <div></div>;

    return (
        <div>
            <span className='photo-show-modal'>
              <span className='photo-show-modal-screen' onClick={() => {
                  props.clearPhoto();
                  props.history.push('/');
              }}>
              <span className='photo-show-modal-box' onClick={e => {
                    e.stopPropagation();
              }}>
              <span className='photo-form-span'>

                <form onSubmit={this.handleSubmit.bind(this)}>

                  <label htmlFor="post-body">Body of Post</label>
                  <input type="text"
                    id="post-body"
                    value={this.state.title}
                    onChange={this.handleInput.bind(this)}/>

                  <input type="file"
                    onChange={this.handleFile.bind(this)}/>

                  <h3>Image preview </h3>
                    {preview}

                  <button>Post Photo</button>
                </form>

              </span>
            </span>
          </span>
        </span>
      </div>
    );
  }

}

const mapStateToProps = ({ ui }) => {
  return ({
    showPhoto: ui.showPhoto
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    clearPhoto: () => dispatch(clearPhoto())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PhotoShow));
