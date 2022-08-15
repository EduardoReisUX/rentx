import { createReadStream } from "fs";
import { parse } from "csv-parse";

export class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = createReadStream(file.path);

    const parseFile = parse();

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}
