// For this project development
import "@vue/runtime-core";

declare module "@vue/runtime-core" {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    FtButton: typeof import("../packages/ft-design")["FtButton"];
  }
}

export {};
