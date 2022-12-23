import { ExtractPropTypes } from "vue";
export const buttonProps = {
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
} as const;
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
