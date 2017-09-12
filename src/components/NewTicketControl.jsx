import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {
      formModalIsShowing: false
    };
  }

  showFormModal(event){
    this.setState({formModalIsShowing: true});
  }

  hideFormModal(event){
    this.setState({formModalIsShowing: false});
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
