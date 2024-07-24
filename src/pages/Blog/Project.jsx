import React from "react";

const Project = () => {
  const resturentImage = [
    {
      url: "c.png",
    },
    {
      url: "d.png",
    },
    {
      url: "a.png",
    },
    {
      url: "b.png",
    },
    {
      url: "c.png",
    },
    {
      url: "d.png",
    },
    {
      url: "a.png",
    },
    {
      url: "b.png",
    },
  ];
  const videoStraming = [
    {
      url: "c.png",
    },
    {
      url: "d.png",
    },
    {
      url: "a.png",
    },
    {
      url: "b.png",
    },
    {
      url: "c.png",
    },
    {
      url: "d.png",
    },
    {
      url: "a.png",
    },
    {
      url: "b.png",
    },
  ];
  return (
    <div className="flex flex-col w-full mt-5">
      <div className="flex justify-center items-center h-20 w-auto text-4xl md:text-6xl">
        <h1 className="text-red-600">My Project</h1>
      </div>
      <div className="mx-5 md:mx-20 flex flex-col gap-10">
        <div>
          <h1 className="text-2xl md:text-4xl text-gray-500 shadow-2xl">
            Video Streaming
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full gap-5 md:gap-10">
          {resturentImage.map((image, index) => (
            <div
              key={index}
              className="h-full w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-md p-2"
            >
              <img
                src={image.url}
                alt=""
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-5 md:mx-20 flex flex-col gap-10">
        <div>
          <h1 className="text-2xl mt-4 md:text-4xl text-gray-500 shadow-2xl">
            Resturent MAnagement system
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full gap-5 md:gap-10">
          {videoStraming.map((image, index) => (
            <div
              key={index}
              className="h-full w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-md p-2"
            >
              <img
                src={image.url}
                alt=""
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
