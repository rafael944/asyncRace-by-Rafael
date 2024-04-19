import { IoIosRefresh } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";
import CreateCarForm from "./CreateCarForm";
import UpdateCarForm from "./UpdateCarForm";

export default function Configurations({
  handleRace,
  handleStop,
  setCars,
  cars,
  selectedId,
}) {
  return (
    <div className="config">
      <div>
        <button className="start" onClick={handleRace}>
          Race <CiPlay1 />
        </button>
        <button className="update" onClick={handleStop}>
          Reset <IoIosRefresh />
        </button>
      </div>
      <CreateCarForm setCars={setCars} />
      <UpdateCarForm selectedId={selectedId} setCars={setCars} />
      <button className="start">Generate Cars</button>
    </div>
  );
}
