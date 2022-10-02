import React, { useState } from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({
  status,
  message,
  onValidated,
  setErrorState,
  setSucessState,
  setLoadingState,
}) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      text &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MESSAGE: text,
        MERGE1: firstName,
        MERGE2: lastName,
      });
      
        
  };

  const clearInputs = ()=>{
    setFirstName("");
    setLastName("");
    setEmail("");
    setText("");
  }

  return (
    <div className="overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            I would love to hear from you, lets stay in touch.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <form
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          {status === "sending" &&
            (setLoadingState(true),
            setSucessState(false),
            setErrorState(false))}
          {status === "error" &&
            (setErrorState(true),
            setLoadingState(false),
            setSucessState(false))}
          {status === "success" &&
            (setSucessState(true),
            setLoadingState(false),
            setErrorState(false),
            clearInputs
            )}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-white"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-white"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                defaultValue={""}
              />
            </div>
          </div>

          {/* Close button appears if form was successfully sent */}
          <div className="sm:col-span-2">
            {status !== "success" && (
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent outline-3 outline py-3 text-base font-medium text-white shadow-sm button_slide  slide_right focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Let's talk
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const MailchimpForm = (props) => {
  const url = `https://genhybridsystems.us12.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
            setSucessState={props.setSucessState}
            setErrorState={props.setErrorState}
            setLoadingState={props.setLoadingState}
          />
        )}
      />
    </div>
  );
};

export default MailchimpForm;
