import * as React from "react";
import { connect } from "react-redux";

import * as CustomerActions from "../store/customer/actionCreators";

export interface State {
  open: boolean;
  selected: any;
  something: any;
}

export interface Props {
  // Redux action creator
  something: any;
  setCustomerId: (id: string) => void;
}

export class Dropdown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: false,
      selected: null,
      something: props.something
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      something: nextProps.something
    });
  }

  toggleMenu = (): void => {
    this.props.setCustomerId("asd");
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  selectItem = (itemName: string): void => {
    this.setState({
      selected: itemName
    });
  };

  renderMenu(): React.ReactNode {
    const menu: React.ReactNode = (
      <div className="menu">
        <ul>
          <li onClick={() => this.selectItem("thing 1")}>thing 1</li>
          <li onClick={() => this.selectItem("thing 2")}>thing 2</li>
          <li onClick={() => this.selectItem("thing 3")}>thing 3</li>
        </ul>
      </div>
    );

    return this.state.open ? menu : "";
  }

  render() {
    return (
      <div className="dropdown">
        <button onClick={this.toggleMenu} className="button">
          Toggle
        </button>
        {this.renderMenu()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  something: state.something
});

export const mapDispatchToProps = {
  setCustomerId: CustomerActions.setCustomerId
};

export default connect(
  null,
  mapDispatchToProps
)(Dropdown);
