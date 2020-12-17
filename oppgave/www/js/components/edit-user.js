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
	<form id="form1" method="POST">>
	Username: <input type="text" name="uname" value=""><br>
	First name: <input type="text" name="firstName" value=""><br>
	Last name: <input type="text" name="lastName" value=""><br>
	Password new: <input type="text" name="password" value=""><br>
	Password old: <input type="text" name="password" value=""><br>
	<input type="submit" form="form1" value="Submit">
	`;
  }
  

}
customElements.define('edit-user', EditUser);
