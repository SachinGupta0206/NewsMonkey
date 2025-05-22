import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://media.wired.com/photos/680c4668a6849b62dcc2a93d/191:100/w_1280,c_limit/HP-EliteBook-Ultra-G1i_042024_Lede.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary btn-dark" >Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
