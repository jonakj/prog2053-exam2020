import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

// Renders / adds the form to the html page
  render() {
	return html`
	<form id="form1" method="POST">
	Username: <input type="text" name="uname" value="${this.user.uname}"><br>
	First name: <input type="text" name="firstName" value="${this.user.firstName}"><br>
	Last name: <input type="text" name="lastName" value="${this.user.lastName}"><br>
	Password new: <input type="text" name="password"><br>
	Password old: <input type="text" name="password"><br>
	<input type="submit" form="form1" value="Submit">
	`;
  }
	
}
customElements.define('edit-user', EditUser);
