import React from "react";
import DrumPad from "./DrumPad";

export default class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    this.state = { power: true };
  }
  onKeyPressed = (event) => {
    this.keys.map((key) => {
      if (event.key.toLowerCase() === key.toLowerCase()) {
        let drumPad = document.getElementById(key);
        drumPad.click();
        document.getElementById("display").innerText = drumPad.dataset.name;
      }
      return key;
    });
  };

  powerSwitch = () => {
    this.keys.forEach((key) => {
      document.getElementById(key).muted = this.state.power;
    });
    this.setState({ power: !this.state.power });
  };

  render() {
    document.addEventListener("keypress", this.onKeyPressed);
    return (
      <div id="drum-machine">
        <div id="display" className="display">
          Krr
        </div>
        <div className="drumRow">
          <DrumPad
            soundUrl="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav"
            name="Krr"
            drumKey="Q"
          />
          <DrumPad
            soundUrl="https://rpg.hamsterrepublic.com/wiki-images/2/21/Collision8-Bit.ogg"
            name="Wiu"
            drumKey="W"
          />
          <DrumPad
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            name="Guitar"
            drumKey="E"
          />
        </div>
        <div className="drumRow">
          <DrumPad
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            name="Electric"
            drumKey="A"
          />
          <DrumPad
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            name="Chord1"
            drumKey="S"
          />
          <DrumPad
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            name="Chord2"
            drumKey="D"
          />
        </div>
        <div className="drumRow">
          <DrumPad
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            name="Clap"
            drumKey="Z"
          />
          <DrumPad
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            name="Tzz"
            drumKey="X"
          />
          <DrumPad
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            name="Drum"
            drumKey="C"
          />
        </div>
        <div className="power">
          <label className="powerLabel">Power</label>
          <label className="switch">
            <input
              id="power"
              type="checkbox"
              onChange={this.powerSwitch}
              checked={this.state.power}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    );
  }
}
