import { ExtractPropTypes } from "vue";

export enum TypeEnum {
  ERROR = "error",
  WARNING = "warning",
  DELETE = "delete",
}

const types = ["error", "warning", "delete"] as const;

export interface IMessageProps {
  type: "error" | "warning" | "delete";
  title?: string;
  content: string;
  isConfirm?: boolean;
  callback?: Function;
  visible?: boolean;
}

export type DialogProps = ExtractPropTypes<IMessageProps>;
