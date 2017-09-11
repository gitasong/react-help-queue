import React from "react";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
    this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
    console.log(this);
  }

  handleDisplayingNewTicketForm(event){
    console.log("New ticket button was clicked!");
    this.setState({formVisibleOnPage: true});
    console.log(this);
  }

  render() {
    let formAreaContent = null;
    if (this.state.formVisibleOnPage) {
      formAreaContent = <h1>Form will eventually go here!</h1>
    } else {
      formAreaContent = <button onClick={this.handleDisplayingNewTicketForm.bind(this)}>Request Help</button>;
    }

    return (
        <div>
          {formAreaContent}
        </div>
    );
  }

}

export default NewTicketControl;
