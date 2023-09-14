import Wrapper from "../components/Wrapper";
import UploadIcon from "../../../assets/images/uploadIcon.svg"

function Upload() {
  return (
    <Wrapper>
      <div className="flex flex-col p-10 justify-start h-full w-full">
        <p className="text-3xl font-bold">Mapilio Kit Uploader</p>
        <p className="text-md text-menuText mt-4">
          Image GPS and capture time are minimally required to upload images to
          Mapilio.
        </p>
        <div className="bg-white w-full h-[190px] mt-4 border-dashed border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center">
          <img
            src={UploadIcon}
            alt="upload"
            className="w-18 h-18"
          />

          <p className="text-md text-menuText mt-4">
            Drag & Drop files or
            <span
              className="text-blue-600 cursor-pointer ml-1"
            >
              Browse
            </span>
          </p>
          <p className="text-sm text-secondary mt-4">
            Input video path you want to process
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
export default Upload;
