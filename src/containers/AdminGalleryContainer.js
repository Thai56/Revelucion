import React, { Component } from 'react';
// import BarberShopLogo from '../img/Gallery/gallery4.jpg';
function GalleryContainer(props) {
  const ContainerStyle = {
    height: 800,
    width: 300,
    // background: `url(${props.banner})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };
  const pics = props.pics.map((pic, i) =>
    <li key={i}>{pic}</li>
  );
  return (
    <section className="gallery-container" style={ContainerStyle}>
      <ul>{pics}</ul>
    </section>
  );
}
export default class AdminGalleryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: ['gal1', 'gal2', 'gal3'],
      comment: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('call function from handleSubmit');
    console.log(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="admin-gallery-container">
        {<GalleryContainer pics={this.state.gallery} />}
        <textarea value={this.state.comment} onChange={this.onInputChange} />
        <button action='submit'>Submit Commnent</button>
      </form>
    );
  }
}
