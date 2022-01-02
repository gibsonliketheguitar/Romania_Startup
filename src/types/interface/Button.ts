import { TVariant } from "../type/Button";

export interface IButton {
  disabled?: boolean;
  width?: string;
  height?: string;
  title: string;
  variant?: TVariant;
}
