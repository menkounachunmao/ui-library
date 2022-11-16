import { ExtractPropTypes } from "vue";
export const iframeProps = {
  url: {
    type: String,
  },
} as const;
export type IframeProps = ExtractPropTypes<typeof iframeProps>;
