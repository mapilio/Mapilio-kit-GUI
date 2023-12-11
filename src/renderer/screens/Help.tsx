import React from "react";
import Wrapper from "../components/Wrapper";

function Help() {
  return (
    <Wrapper>
      <div className="flex flex-col p-10 justify-start h-full w-full">
        <p className="text-3xl font-bold">Mapilio Support</p>

        <p className="text-md font-medium text-black mt-4">
          Support and Documentation:
        </p>
        <a href="https://support.mapilio.com/" target="_blank">
          <p className="text-md font-medium text-blue-700 mt-2">
            https://support.mapilio.com/
          </p>
        </a>
        <p className="text-md font-medium text-black mt-6">
          Learn more about Capture tools:
        </p>
        <a href="https://help.mapilio.com/capture_tools" target="_blank">
          <p className="text-md font-medium text-blue-700 mt-2">
            https://support.mapilio.com/capture_tools
          </p>
        </a>
      </div>
    </Wrapper>
  );
}
export default Help;
