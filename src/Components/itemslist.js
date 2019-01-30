import React from "react";
import { items } from "../Actions";
import { connect } from "react-redux";

class itemlist extends React.Component {
  componentDidMount() {
    this.props.items();
  }

  render() {
    return (
      <div className="ui vertical menu">
        <ul>
          {this.props.itemsList.map(item => (
            <div className="item">
              <li>{item.name}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    itemsList: state.items
  };
};

export default connect(
  mapStateToProps,
  { items }
)(itemlist);
