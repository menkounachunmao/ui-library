// const chalk = require("chalk");
const path = require("path");
const execa = require("execa");
// 发布到npm
async function publishNpm() {
  //   console.log(chalk.blue("发布到npm"));
  const targetDir = path.resolve(__dirname, "../dist/ft-design");
  await execa("pnpm", ["publish", "-no-git-checks"], {
    stdio: "inherit",
    cwd: targetDir,
  });
}

publishNpm();
