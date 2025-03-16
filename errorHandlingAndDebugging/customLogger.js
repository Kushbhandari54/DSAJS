function createLogger(prefix) {
  return function (message) {
    console.log(`[${prefix}] ${message}`);
  };
}

const errorLogger = createLogger("ERROR");
const infoLogger = createLogger("INFO");

errorLogger("Something went wrong!"); // [ERROR] Something went wrong!
infoLogger("All systems operational."); // [INFO] All systems operational.
