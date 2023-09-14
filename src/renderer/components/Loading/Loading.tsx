import WaterMark from "../../../../assets/images/mapilioWatermark.svg";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <img src={WaterMark} />
    </div>
  );
}
