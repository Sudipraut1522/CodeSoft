import React from "react";
import Form from "../../component/Form/Form";

const Contact = () => {
  return (
    <div className="mx-5 mt-10 md:mx-10 lg:mx-20 lg:mt-20">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-x-16 gap-y-10 lg:gap-y-0">
        <div className="w-full lg:w-1/2 p-4 rounded-md">
          <img
            src="./contact.jpg"
            alt="Sudip Raut"
            className="object-cover rounded-md w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 flex-1">
          <div>
            <h1 className="text-4xl lg:text-7xl">Contact Us</h1>
            <p className="text-gray-300 p-3">
              Complete the form below to get a free quote
            </p>
            <hr />
          </div>

          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
