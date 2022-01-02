import Button from "../../core/Button/Button";
import Description from "./Main.Description";
import Information from "./Main.Info";
import Portfolio from "./Main.Portfolio";
import Tag from "./Main.Tag";

export default function Main() {
  return (
    <div className="flex flex-col">
      <Information />
      <Description />
      <Tag />
      <Portfolio />
      <Button title="Încarcă încă 6 lucrari" />
    </div>
  );
}
