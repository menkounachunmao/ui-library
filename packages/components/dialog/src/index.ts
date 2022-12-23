import { ExtractPropTypes } from "vue";
export const dialogProps = {
  closeOnClickModal: Boolean,
  title: {
    type: String,
    default: " ",
  },
} as const;
export type DialogProps = ExtractPropTypes<typeof dialogProps>;
