import { version } from "./version";
import type { App, Plugin } from "@vue/runtime-core";

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    if (app["INSTALLED"]) return;

    app["INSTALLED"] = true;
    components.forEach((c) => app.use(c));
  };

  return {
    version,
    install,
  };
};
