import React, { useState } from "react";
import emailjs from "emailjs-com";
import isEmailMaybe from "is-email-maybe";
import { Icon } from "@iconify/react";

export default function Form({ toggleOverlay }) {
  const initState = {
    name: "",
    email: "",
    msg: "",
  };

  const [formData, setFormData] = useState(initState);
  const [err, setErr] = useState({
    emptyFields: [],
    emailValid: true,
  });

  const toSend = {
    from_name: formData.name,
    to_name: "to_name",
    message: formData.msg,
    reply_to: formData.email,
  };

  function clearForm() {
    setFormData((prev) => initState);
  }

  function changeHandler(e) {
    const keyName = e.target.name;

    setErr((prev) => ({
      emptyFields: [],
      emailValid: true,
    }));

    if (keyName === "name")
      setFormData((prev) => ({ ...prev, name: e.target.value.trim() }));

    if (keyName === "email")
      setFormData((prev) => ({ ...prev, email: e.target.value.trim() }));

    if (keyName === "msg")
      setFormData((prev) => ({ ...prev, msg: e.target.value }));
  }

  function formSubmitHandler(e) {
    e.preventDefault();

    if (!formData.name) {
      setErr((prev) => ({
        ...prev,
        emptyFields: [...prev.emptyFields, "Name"],
      }));
    }
    if (!formData.email) {
      setErr((prev) => ({
        ...prev,
        emptyFields: [...prev.emptyFields, "Email"],
      }));
    }

    if (!formData.msg) {
      setErr((prev) => ({
        ...prev,
        emptyFields: [...prev.emptyFields, "Message"],
      }));
    }

    if (!isEmailMaybe(formData.email)) {
      setErr((prev) => ({ ...prev, emailValid: false }));
      return;
    }

    if (formData.name === "" || formData.email === "" || formData.msg === "")
      return;

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        toSend,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          toggleOverlay();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    clearForm();
  }

  return (
    <form className="gen-card" action="">
      {err.emptyFields.length > 0 && (
        <p className="form_err">{`Following fields can't be empty: ${err.emptyFields.join(
          ", "
        )}`}</p>
      )}
      {!err.emailValid && formData.email && (
        <p className="form_err">Seems your Email is not valid</p>
      )}
      <label className="form-label" htmlFor="name-field">
        Name:
      </label>
      <input
        type="text"
        id="name-field"
        name="name"
        value={formData.name}
        onChange={(e) => changeHandler(e)}
      />

      <label className="form-label" htmlFor="email-field">
        Email:
      </label>
      <input
        type="email"
        id="email-field"
        name="email"
        value={formData.email}
        onChange={(e) => changeHandler(e)}
      />

      <label className="form-label" htmlFor="msg-field">
        Message:
      </label>
      <textarea
        type="text"
        value={formData.msg}
        id="msg-field"
        name="msg"
        rows="6"
        onChange={(e) => changeHandler(e)}
      ></textarea>

      <button className="purple-btn" onClick={formSubmitHandler}>
        <div className="icon-container">
          <Icon icon="akar-icons:send" width="1.6rem" height="1.6rem" />
        </div>
        <p>Send Message</p>
      </button>
    </form>
  );
}
