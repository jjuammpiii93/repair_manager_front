import React from "react";

class TicketCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.description);
    event.preventDefault();
  }
  url = "http://localhost:8080/api/v1/ticket";
  onSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: this.state.description }),
    };

    fetch("http://localhost:8080/api/v1/ticket", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ description: data.description }));

    // fetch(this.props.formAction, {
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ description: this.state.description }),
    //   method: "POST",
    // });

    this.setState({ description: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Descripción:
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TicketCreate;
