import { Command } from "commander";

import { docs } from "./docs";
import { getPackageInfo } from "@/utils/get-package-info";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = getPackageInfo();

  const program = new Command()
    .name("0xaddm")
    .description("add production ready templates to your project")
    .version(
      packageInfo.version || "1.0.0",
      "-v, --version",
      "display the version number"
    );

  program.addCommand(docs);

  program.parse();
}

main();
