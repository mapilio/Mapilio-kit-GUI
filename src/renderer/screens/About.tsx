import Wrapper from "../components/Wrapper";

function About() {
  return (
    <Wrapper>
      <div className="flex flex-col p-10 justify-start h-full w-full">
        <p className="text-3xl font-bold">Mapilio Uploader Beta</p>
        <p className="text-md font-medium text-black mt-4">
          Application to Upload data to Mapilio App
        </p>
        <p className="text-md font-medium text-blue-700 mt-2">
          https://mapilio.com/
        </p>
        <p className="text-md flex flex-row font-medium text-black mt-6">
          License
          <p className="text-md font-medium text-menuText  ml-2">GNU</p>
        </p>
        <p className="text-md flex flex-row font-medium text-black mt-2">
          Developers{" "}
          <p className="text-md font-medium text-primary  ml-2">
            https://github.com/mapilio
          </p>
        </p>
      </div>
    </Wrapper>
  );
}
export default About;
