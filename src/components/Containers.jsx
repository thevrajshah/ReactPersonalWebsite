import React, { Component } from "react";

export class WhiteSection extends Component {
  render() {
    return (
      <div
        className='whiteSection'
        style={{
          padding: this.props.paddingTB ? this.props.paddingTB : "3rem 0",
        }}
      >
        <section
          style={{
            textAlign: this.props.textAlign ? this.props.textAlign : "left",
            padding: this.props.paddingLR ? this.props.paddingLR : "0 3rem",
          }}
        >
          {this.props.children}
        </section>
      </div>
    );
  }
}

export class GreySection extends Component {
  render() {
    return (
      <div
        className='greySection'
        style={{
          padding: this.props.paddingTB ? this.props.paddingTB : "3rem 0",
        }}
      >
        <section
          style={{
            textAlign: this.props.textAlign ? this.props.textAlign : "left",
            padding: this.props.paddingLR ? this.props.paddingLR : "0 3rem",
          }}
        >
          {this.props.children}
        </section>
      </div>
    );
  }
}

export class Card extends Component {
  render() {
    return (
      <div
        className='card'
        style={{
          textAlign: this.props.textAlign ? this.props.textAlign : "center",
          padding: this.props.padding ? this.props.padding : "2rem 3rem",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}