interface ICheckbox {
  title: string;
}

export default function Checkbox({ title }: ICheckbox) {
  return (
    <div className="flex flex-row justify-center items-center">
      <input type="checkbox" />
      <div>{title}</div>
    </div>
  );
}
