import "./team.scss";

import React, { Component } from "react";
import TeamAvatar from "./TeamAvatar";
import { teamData } from "./teamData";
import { team1, team2, team3, team4, team5 } from "../../../assets";

export default class Team extends Component {
  render() {
    let images = [team1, team2, team3, team4, team5];
    return (
      <>
        <section className="team">
          <div className="container team--wrapper">
            <h2>
              Наша <span>команда</span>
            </h2>
            <ul className="team--list">
              {teamData.map((avatar, i) => {
                let { name, position, phones, email } = avatar;
                let image = images[i];
                return (
                  <TeamAvatar
                    key={i}
                    imageAvatar={image}
                    nameAvatar={name}
                    positionAvatar={position}
                    phonesAvatar={phones}
                    emailAvatar={email}
                  />
                );
              })}
            </ul>
            <a  className="whiteBtn">
              Наша команда
            </a>
          </div>
        </section>
      </>
    );
  }
}
