import app from "./providers/app";

/**
 * Clear the console before the app runs
 */
app.clearConsole();
/**
 * Load Configuration
 */
app.loadConfiguration();
/**
 * Run the Database pool
 */
app.loadDatabase();
/**
 * Run the Server
 */
app.loadServer();
