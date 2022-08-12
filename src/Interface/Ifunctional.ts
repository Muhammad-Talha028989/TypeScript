/**
 * We are going to implement interface of function.
 */

type errorType = number | string;
interface ICatch {
  (payload: errorType): errorType;
}

let Catch: ICatch = (error: errorType): errorType => {
  switch (error) {
    case 500:
      return "Server not found";
    case "Server not found":
      return 500;
    case 404:
      return "Page not found";
    case 501:
      return "Server not response";
    default:
      return "It may be rendom error";
  }
};

let seekError: errorType = Catch("Server not found");

console.info(seekError);
