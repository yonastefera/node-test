/**
 * Creates & maintains the log
 */

class Log {
  // Adds INFO prefix string to the log string
  public info(_string: string): void {
    console.log("INFO", _string);
  }

  // Adds WARN prefix string to the log string
  public warn(_string: string): void {
    console.log("WARN", _string);
  }

  // Adds ERROR prefix string to the log string
  public error(_string: string): void {
    // Line break and show the first line
    console.log("\x1b[31m%s\x1b[0m", "[ERROR] :: " + _string.split(/r?\n/)[0]);
  }
}

export default new Log();
