import React from "react";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
  }

  render() {
    return (
      <button>Request Help</button>
    );
  }

}

export default NewTicketControl;
