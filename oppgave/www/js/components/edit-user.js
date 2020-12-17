import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

// Renders / adds the form to the html page, the submit button runs the "changeUserData" command
  render() {
	return html`
	<form onsubmit="javascript: return false;" id="form1" method="POST">
	UID: <input type="text" id="uid" name="uid" value="${this.user.uid}" readonly>
	<br>
	Username: <input type="text" id="uname" name="uname" value="${this.user.uname}">
	<br>
	First name: <input type="text" id="firstName" name="firstName" value="${this.user.firstName}">
	<br>
	Last name: <input type="text" id="lastName" name="lastName" value="${this.user.lastName}">
	<br>
	Password new: <input type="text" id="pwd" name="pwd">
	<br>
	Password old: <input type="text" id="oldpwd" name="oldpwd">
	<br>
	<input type="submit" form="form1" value="Submit" @click=${this.changeUserData}>
	`;
  }

  //Runs on submit button click
  changeUserData(i) {
    // Retrieves the data from the form
    const userData = new FormData(i.target.form);
	// Uses the updateUser php script with the form data
    fetch('api/updateUser.php', {
     method: 'POST',
     body: userData
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("User info modified");
        } else {
            console.log("The user info not modified due to an error");
			// Error message from the php script
			console.log("Error: " + data.msg);
        }
      })
  }
}
customElements.define('edit-user', EditUser);
