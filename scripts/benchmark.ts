import { glob } from 'glob';
import * as path from 'path';

const executeFile = async (file: string) => {
  const absolutePath = path.resolve(file);
  return await import(absolutePath).then((module) => module);
};

try {
  const files = await glob('**/*.bench.ts');

  for (const file of files) {
    await executeFile(file);
  }
} catch (e) {
  console.error(e);
}
