import { useState } from "react";
import Checkbox from "../../core/Checkbox";

export default function SideBar() {
  return (
    <div className="pt-8 px-4 flex flex-col bg-white h-full divide-y divide-solid">
      <Service />
      <Location />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

const Service = () => {
  const [filter, setFilter] = useState<string>("");
  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-btween">
        <span className="text-base">Caută dupa serviciu</span>
        <ClearFilter />
      </div>
    </div>
  );
};

const ClearFilter = () => {
  const handleOnClick = () => console.log("clear filter");
  return (
    <div className="flex-row" onClick={handleOnClick}>
      <span>x</span>
      <span>Sterge filtre</span>
    </div>
  );
};

const Location = () => {
  const [location, setLocation] = useState();
  return (
    <div className="mt-10 flex flex-col">
      <div>Location</div>
      <input />
    </div>
  );
};

const SectionOne = () => {
  const [isVisible, setIsVisible] = useState<Boolean>(true);
  const checkboxs = ["Companie", "Persona Fizica"];
  return (
    <div className="mt-8 flex flex-col">
      <div className="mt-4 flex flex-row justify-between items-center">
        <span className="text-base bold">Entitate</span>
        <span onClick={() => setIsVisible((state: Boolean) => !state)}>
          {" "}
          up arrow{" "}
        </span>
      </div>
      <div
        className={`my-3 flex justify-between items-center ${
          isVisible ? "" : "hidden"
        }`}
      >
        {checkboxs.map((cb: string, index: number) => (
          <Checkbox key={index + cb} title={cb} />
        ))}
      </div>
    </div>
  );
};

const SectionTwo = () => {
  //Look at the react visibility render avance option thing
  const [isVisible, setIsVisible] = useState<Boolean>(true);
  const checkboxs = [
    "Montaj tigla metalica",
    "Montaj tigla cu roca",
    "Montaj tigla ceramica",
    "Montaj sistem pluvial",
  ];
  return (
    <div className="mt-8 flex flex-col">
      <div className="my-4 flex flex-row justify-between items-center">
        <span className="text-base">Entitate</span>
        <span onClick={() => setIsVisible((state: Boolean) => !state)}>
          up arrow
        </span>
      </div>
      <div
        className={`flex flex-col space-y-2.5 justify-center items-start ${
          isVisible ? "" : "hidden"
        } `}
      >
        {checkboxs.map((cb: string, index: number) => (
          <Checkbox key={index + cb} title={cb} />
        ))}
      </div>
    </div>
  );
};
