import React from "react";
import { NavLink } from "react-router-dom";
import FileDownload from "../../component/FileDownload/FileDownload";

const About = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="w-[50%] flex justify-between items-center">
          <div className="rounded-md flex flex-col mt-4">
            <img src="./image.avif" alt="Profile" className="rounded-lg" />
            <FileDownload />
          </div>
          <div className="flex flex-col gap-y-8 ml-8">
            <div className="flex justify-center items-center py-4">
              <h1 className="text-6xl shadow-2xl">About Me</h1>
            </div>
            <div className="py-4 text-xl">
              <table className="table-auto w-full text-left">
                <tbody className="flex flex-col gap-8">
                  <tr className="flex justify-between gap-4">
                    <td className="font-bold">Name</td>
                    <td>Sudip Raut</td>
                  </tr>
                  <tr className="flex justify-between gap-4">
                    <td className="font-bold">Username</td>
                    <td>SudipRaut1522</td>
                  </tr>
                  <tr className="flex justify-between gap-4">
                    <td className="font-bold">Email</td>
                    <td>sudipraut444@gmail.com</td>
                  </tr>
                  <tr className="flex justify-between gap-4">
                    <td className="font-bold">Location</td>
                    <td>Lokanthali, Bhaktapur, Nepal</td>
                  </tr>
                  <tr className="flex justify-between gap-4">
                    <td className="font-bold">Phone</td>
                    <td>+977 9817721568</td>
                  </tr>
                  <tr className="flex justify-between gap-4">
                    <td className="font-bold">LinkedIn</td>
                    <td>
                      <a
                        href="https://www.linkedin.com/in/sudip-raut-832a9b2a1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        Sudip Raut LinkedIn
                      </a>
                    </td>
                  </tr>
                  <tr className="flex justify-between gap-4">
                    <td className="font-bold">GitHub</td>
                    <td>
                      <a
                        href="https://github.com/Sudipraut1522/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        Sudip Raut GitHub
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
