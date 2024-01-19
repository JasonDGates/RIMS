import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageUrl } from "remove.bg";

export default removeBg = (url: string, outputFile: string): void => {
    removeBackgroundFromImageUrl({
        url,
        apiKey: "YOUR-API-KEY",
        size: "regular",
        type: "person",
        outputFile 
      }).then((result: RemoveBgResult) => {
       console.log(`File saved to ${outputFile}`);
        const base64img = result.base64img;
      }).catch((errors: Array<RemoveBgError>) => {
       console.log(JSON.stringify(errors));
      });
}