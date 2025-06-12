import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://avatars.githubusercontent.com/u/177932031?v=4",
      },
    };
    //console.log("child constructor");
  }
  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/spathak27");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("component updated");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    //console.log("child render");
    return (
      <div className="user-card">
        <img className="img" src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location} </h3>
        <h3>Contact: pathakshruti257@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
