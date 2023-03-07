import { v4 as uuidv4 } from 'uuid';

function generatorUuid(): string {
  return uuidv4();
}

export default generatorUuid;
