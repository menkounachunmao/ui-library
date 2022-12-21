import { ExtractPropTypes } from "vue";
export { default as Input } from "./input";
export const inputProps = {
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
} as const;
export type InputProps = ExtractPropTypes<typeof inputProps>;
