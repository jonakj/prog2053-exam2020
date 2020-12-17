import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  // din kode her
  
  
  render() {
	return html`
	<form id="form1">
	Username: <input type="text" name="uname"><br>
	First name: <input type="text" name="firstName"><br>
	Last name: <input type="text" name="lastName"><br>
	Password new: <input type="text" name="password"><br>
	Password old: <input type="text" name="password"><br>
	<input type="submit" form="form1" value="Submit">
	`;
  }

}
customElements.define('edit-user', EditUser);
