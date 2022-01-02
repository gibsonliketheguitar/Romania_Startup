import { IButton } from "@/types/interface/Button";

enum Btn {
  default = "btn-default",
  outlined = "btn-outlined",
  text = "btn-text",
}

export default function Button({
  variant = "default",
  title,
  height,
  width,
}: IButton) {
  return (
    <div className={`btn-base ${Btn[variant]} ${height} ${width}`}>
      <span className="px-6 py-2.5">{title}</span>
    </div>
  );
}
