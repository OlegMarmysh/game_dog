import React from 'react';
import './App.css';
import img from './dog.jpg'

class Images extends  React.Component {

  render = () => {
    return (
            <div className="item">
                <img  id={this.props.id} src={img} className={this.props.id === this.props.currentTarget ? 'photo show': 'photo'} onClick={this.props.ChangeValue}/>
            </div>

    )
  }
}

export default Images;
