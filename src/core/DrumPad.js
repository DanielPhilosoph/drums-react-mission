import React from "react";

export default class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  play = () => {
    let sound = document.getElementById(`${this.props.drumKey}`);
    document.getElementById("display").innerText = this.props.name;
    sound.play();
  };

  render() {
    return (
      <div
        className="drum-pad"
        onClick={() => {
          this.play();
        }}
      >
        <audio
          src={this.props.soundUrl}
          id={this.props.drumKey}
          data-name={this.props.name}
        />
        {this.props.drumKey}
      </div>
    );
  }
}
