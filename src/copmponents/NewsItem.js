import React, { Component } from "react";

export class NewsItem extends Component {


  render() {
    let {title, description, imageUrl, newsUrl} = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl?imageUrl:"https://media.zenfs.com/en/bloomberg_markets_842/b566ebe38a158cd191a846fc0b004fdd"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
                {description}...
            </p>
            <a href={newsUrl} className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
