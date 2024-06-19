import { readFileSync } from 'fs';


function parseFsmLine(line: string): string[] {
    line = line.trim();
    const part1 = line.split("\/");
    const part2 = part1[0].split("--");
    const part3 = part1[1].split("->");

    return part2.concat(part3).map((it: string) => it.trim());
}

export function extractTransitionsFromFile(fileName: string): Array<string[]> {
    return readFileSync(fileName, 'utf-8')
                    .split(/\r?\n/)     // split in several lines                             
                    .filter((line: string) => line.trim() != "")    // filter empty lines
                    .map(parseFsmLine);     // parse each line to an array of 4 strings
}
