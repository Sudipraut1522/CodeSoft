import React from "react";

const Contact = () => {
  return (
    <div className="px-10 mt-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10">
        <div className="h-60 w-60 flex items-center justify-center flex-col gap-4 bg-gray-500">
          {/* <img src="" alt="" /> */}
          <h2>Main Office</h2>
          <p>Address details here</p>
        </div>
        <div className="h-60 w-60 flex items-center justify-center flex-col gap-4 bg-gray-500">
          <h2>Branch Office</h2>
          <p>Additional details here</p>
        </div>
        <div className="h-60 w-60 flex items-center justify-center flex-col gap-4 bg-white">
          <h2>Office 3</h2>
          <p>More details</p>
        </div>
        <div className="h-60 w-60 flex items-center justify-center flex-col gap-4 bg-white">
          <h2 className=" text-red-600">Office 4</h2>
          <p>More details</p>
        </div>
      </div>
      <div className="flex justify-between px-20 p-4">
        <div>Additional Info 1</div>
        <div>Additional Info 2</div>
      </div>
    </div>
  );
};

export default Contact;
