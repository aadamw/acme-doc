import { existsSync, promises as fs } from "fs";
import path from "path";
import { Command } from "commander";
import { logger } from "@/utils/logger";
import * as z from "zod";
import chalk from "chalk";
import ora from "ora";
import prompts from "prompts";

const initOptionsSchema = z.object({
  cwd: z.string(),
  yes: z.boolean(),
});

async function promptForConfig() {
  const highlight = (text: string) => chalk.cyan(text);

  const options = await prompts([
    {
      type: "text",
      name: "appName",
      message: `What is the name of your ${highlight("app name")}?`,
      initial: "docs",
    },
  ]);

  return {
    appName: options.appName,
  };
}

export const docs = new Command()
  .name("docs")
  .description("initialize docs project")
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .action(async (opts) => {
    try {
      const options = initOptionsSchema.parse(opts);
      const cwd = path.resolve(options.cwd);
      const config = await promptForConfig();

      const pathWithAppName = `${cwd}/${config.appName}`;

      // Ensure target directory doesn't exists.
      if (existsSync(pathWithAppName)) {
        logger.error(`The path ${cwd} already exist. Please try again.`);
        process.exit(1);
      }

      await fs.mkdir(pathWithAppName, { recursive: true });
      await runInit(cwd);

      logger.info("");
      logger.info(
        `${chalk.green("Success!")} Project initialization completed.`
      );
      logger.info("");
    } catch (error) {
      // handleError(error)
    }
  });

async function runInit(cwd: string) {
  const spinner = ora(`Initializing project...`)?.start();
}
