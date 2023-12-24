import { readFileStrSync } from "https://deno.land/std/fs/mod.ts";

async function read(filePath: string): Promise<string> {
  try {
    const file = await Deno.readTextFile(filePath);
    return file;
  } catch (error) {
    throw new Error(`Error reading the file: ${error}`);
  }
}

function main() {
  console.log("CLU Parser");
  // Get the file path from the command line arguments
  const code = read(Deno.args[0]);
  console.log(split(code));
}
