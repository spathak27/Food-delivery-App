import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About class component</h1>

        <UserClass name={"Shruti Pathak (classes)"} location={"Agra (class)"} />
      </div>
    );
  }
}

export default About;
