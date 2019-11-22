import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span>A : {this.props.a}</span>
          <button onClick={() => this.props.OnAUpdate(this.props.b)}>
            Update A
          </button>
        </div>
        <br />
        <div>
          <span>B : {this.props.b}</span>
          <button onClick={() => this.props.OnBUpdate(this.props.a)}>
            Update B
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    a: store.rA.a,
    b: store.rB.b
  };
};

const mapDispatchToProps = dispatch => {
  return {
    OnAUpdate: b => dispatch({ type: "ON_A_UP", b: b }),
    OnBUpdate: a => dispatch({ type: "ON_B_UP", a: a })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
