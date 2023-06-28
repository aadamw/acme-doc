// src/index.ts
import { Command as Command2 } from "commander";

// src/docs.ts
import { existsSync, promises as fs } from "fs";
import path from "path";
import { Command } from "commander";

// src/utils/logger.ts
import chalk from "chalk";
var logger = {
  error(...args) {
    console.log(chalk.red(...args));
  },
  warn(...args) {
    console.log(chalk.yellow(...args));
  },
  info(...args) {
    console.log(chalk.cyan(...args));
  },
  success(...args) {
    console.log(chalk.green(...args));
  },
  break() {
    console.log("");
  }
};

// src/docs.ts
import * as z from "zod";
import chalk2 from "chalk";
import ora from "ora";
import prompts from "prompts";
var initOptionsSchema = z.object({
  cwd: z.string(),
  yes: z.boolean()
});
async function promptForConfig() {
  const highlight = (text) => chalk2.cyan(text);
  const options = await prompts([
    {
      type: "text",
      name: "appName",
      message: `What is the name of your ${highlight("app name")}?`,
      initial: "docs"
    }
  ]);
  return {
    appName: options.appName
  };
}
var docs = new Command().name("docs").description("initialize docs project").option("-y, --yes", "skip confirmation prompt.", false).option(
  "-c, --cwd <cwd>",
  "the working directory. defaults to the current directory.",
  process.cwd()
).action(async (opts) => {
  try {
    const options = initOptionsSchema.parse(opts);
    const cwd = path.resolve(options.cwd);
    const config = await promptForConfig();
    const pathWithAppName = `${cwd}/${config.appName}`;
    if (existsSync(pathWithAppName)) {
      logger.error(`The path ${cwd} already exist. Please try again.`);
      process.exit(1);
    }
    await fs.mkdir(pathWithAppName, { recursive: true });
    await runInit(cwd);
    logger.info("");
    logger.info(
      `${chalk2.green("Success!")} Project initialization completed.`
    );
    logger.info("");
  } catch (error) {
  }
});
async function runInit(cwd) {
  const spinner = ora(`Initializing project...`)?.start();
}

// src/utils/get-package-info.ts
import path2 from "path";
import fs2 from "fs-extra";
function getPackageInfo() {
  const packageJsonPath = path2.join("package.json");
  return fs2.readJSONSync(packageJsonPath);
}

// src/index.ts
process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));
async function main() {
  const packageInfo = getPackageInfo();
  const program = new Command2().name("0xaddm").description("add production ready templates to your project").version(
    packageInfo.version || "1.0.0",
    "-v, --version",
    "display the version number"
  );
  program.addCommand(docs);
  program.parse();
}
main();
//# sourceMappingURL=index.js.map