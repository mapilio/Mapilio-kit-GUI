import LeftSideBar from "./LeftSideBar";

function Wrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex flex-row">
      <LeftSideBar />
      <div className="w-2/3 bg-basesecondary flex justify-center items-start">
        {children}
      </div>
    </div>
  );
}
export default Wrapper;
