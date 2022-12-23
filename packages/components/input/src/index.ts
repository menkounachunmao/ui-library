import { ExtractPropTypes } from "vue";
export const inputProps = {
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
} as const;
export type InputProps = ExtractPropTypes<typeof inputProps>;
