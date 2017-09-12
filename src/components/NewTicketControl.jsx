import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {formVisibleOnPage: false};
  }

  showForm(event){
    this.setState({formVisibleOnPage: true});
  }

  hideForm(event){
    this.setState({formVisibleOnPage: false});
  }

  render() {
    const formVisibleOnPage = this.state.formVisibleOnPage;
    let formAreaContent = null;
    if (formVisibleOnPage) {
      formAreaContent = <NewTicketForm
        onNewTicketCreation={this.props.onNewTicketCreation}hideFormAfterSubmission = {this.hideForm}/>
    } else {
      formAreaContent = <Button bsStyle="primary" bsSize="large" block onClick={this.showForm}>Request Help</Button>;
    }

    return (
        <div>
          {formAreaContent}
        </div>
    );
  }

}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketControl;
