// GlobalComponents for Volar
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    FtButton: typeof import("ft-design")["FtButton"];
  }
}

export {};
