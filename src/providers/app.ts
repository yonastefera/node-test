import * as path from "path";
import * as dotenv from "dotenv";

import express from "./express";

import log from "../middlewares/log";

class App {
  // Clear the console
  public clearConsole(): void {
    process.stdout.write("\x1B[2J\x1B[0f");
  }

  // Loads your dotenv file
  public loadConfiguration(): void {
    log.info("Configuration :: Booting @ Master...");

    dotenv.config({ path: path.join(__dirname, "../../.env") });
  }

  // Loads your Server
  public loadServer(): void {
    log.info("Server :: Booting @ Master...");

    express.init();
  }

  // Loads the Database Pool
  public loadDatabase(): void {
    log.info("Database :: Booting @ Master...");
  }
}

export default new App();
