import React, { useState } from "react";
import "./contactform.css";

const ContactForm = () => {
  const [canSubmit, setCanSubmit] = useState(true);
  const [failedSubmit, setFailedSubmit] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    comments: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate(contactForm);
    setFormErrors(errors);
    if (Object.keys(errors).length == 0) {
      setCanSubmit(false);
      fetch("https://win22-webapi.azurewebsites.net/api/contactform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      }).then((response) => {
        if (response.status == 200) {
          setFailedSubmit(false);
        } else {
          setFailedSubmit(true);
        }
      });
    } else {
      setCanSubmit(true);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContactForm((previousContactForm) => {
      return { ...previousContactForm, [id]: value };
    });
  };

  const validate = (values) => {
    let errors = {};
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.name) {
      errors.name = "You should enter a name";
      document.getElementById("name").classList.add("error");
    } else {
      document.getElementById("name").classList.remove("error");
    }
    if (!values.email) {
      errors.email = "You should enter an email";
      document.getElementById("email").classList.add("error");
    } else if (!email_regex.test(values.email)) {
      errors.email = "Email is not valid";
    } else {
      document.getElementById("email").classList.remove("error");
    }
    if (!values.comments) {
      errors.comments = "You should enter a comment";
      document.getElementById("comments").classList.add("error");
    } else if (values.comments.length < 5) {
      errors.comments = `Comment should be more than 5 characters`;
      document.getElementById("comment").classList.add("error");
    } else {
      document.getElementById("comments").classList.remove("error");
    }

    return errors;

    // setFormErrors((err) => errors);
  };

  /*const submitForm = (event) => {
    event.preventDefault();
  };

  const checkLength = (
    element,
    errorMessage = "The field is required.",
    minLength = 1
  ) => {
    if (element.target.value.length < minLength) {
      element.target.classList.add("error");
      document.getElementById(`${element.target.id}ErrorMessage`).innerHTML =
        "you should enter more than 1 character";
    } else {
      document.getElementById(`${element.target.id}ErrorMessage`).innerHTML =
        "";
      element.target.classList.remove("error");
    }
  };

  const checkEmail = (element, errorMessage = "Email is not valid") => {
    if (
      !element.target.value.match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      )
    ) {
      element.target.classList.add("error");
      document.getElementById(`${element.target.id}ErrorMessage`).innerHTML =
        errorMessage;
    } else {
      element.target.classList.remove("error");
    }
  };

  const validate = (element) => {
    switch (element.target.type) {
      case "text":
        checkLength(element);
        break;
      case "email":
        checkLength(element);
        checkEmail(element);
        break;
      case "textarea":
        checkLength(element, "The field should be more than 8 characters", 8);
        break;
    }
  };
  */
  return (
    <div className="contact-form">
      <div className="container">
        {!canSubmit ? (
          failedSubmit ? (
            <div className="form-title text-center">
              <div className="alert alert-danger">
                <h4 className="text-capitalize mt-0 mb-1">
                  Something Went Wrong!
                </h4>
                <p className="mb-0">
                  We couldn't submit your comments right now.
                </p>
              </div>
            </div>
          ) : (
            <div className="form-title text-center">
              <div className="alert alert-success">
                <h4 className="text-capitalize mt-0 mb-1">
                  Thanks for your comment!
                </h4>
                <p className="mb-0">We will contact you as soon as possible.</p>
              </div>
            </div>
          )
        ) : (
          <>
            <div className="form-title">
              <h4 className="text-capitalize mt-5 mb-4">
                come in contact with us
              </h4>
            </div>
            <form noValidate action="#" method="POST" onSubmit={handleSubmit}>
              <div className="row gap-3 gap-sm-0">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Your Name"
                      id="name"
                      onInput={handleChange}
                    />
                    <span className="error-message" id="nameErrorMessage">
                      {formErrors.name}
                    </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your Email"
                      id="email"
                      onInput={handleChange}
                    />
                    <span className="error-message" id="emailErrorMessage">
                      {formErrors.email}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea
                      className="form-control comments"
                      id="comments"
                      onInput={handleChange}
                      cols="30"
                      rows="6"
                      placeholder="Comments"
                    ></textarea>
                    <span className="error-message" id="commentErrorMessage">
                      {formErrors.comments}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12">
                  <button className="btn-post-comment text-capitalize text-white border-0 py-2 px-4 mt-4">
                    post comment
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
