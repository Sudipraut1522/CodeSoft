import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-y-8 p-4"
        onSubmit={handelSubmit}
      >
        <label htmlFor="username" className="text-2xl">
          Username
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="username"
          className="w-full p-2 border-none bg-gray-500 rounded-md"
        />

        <label htmlFor="email" className="text-2xl">
          Email
        </label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          className="w-full p-2 border-none bg-gray-500 rounded-md"
        />

        <label htmlFor="message" className="text-2xl">
          Message
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          cols="10"
          rows="10"
          className="w-full p-2 border-none bg-gray-500 rounded-md"
        ></textarea>

        <button className="p-2 bg-blue-500 text-white rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
