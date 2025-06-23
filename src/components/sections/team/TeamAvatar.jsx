import React, { Component } from "react";

export default class TeamAvatar extends Component {
  render() {
    let { imageAvatar, nameAvatar, positionAvatar, phonesAvatar, emailAvatar } =
      this.props;

    return (
      <li className="team--avatar">
        <div className="team--avatar__img">
          <img src={imageAvatar} alt="no img?" />
        </div>
        <div>
          <h4>{nameAvatar}</h4>
          <p>{positionAvatar}</p>
        </div>
        <div>
          <a href={`tel:${phonesAvatar[0]}`}>{phonesAvatar[0]}</a>
          <a href={`tel:${phonesAvatar[1]}`}>{phonesAvatar[1]}</a>
          <a href={`mailto:${emailAvatar}`}>{emailAvatar}</a>
        </div>
      </li>
    );
  }
}
