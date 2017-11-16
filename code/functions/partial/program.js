/* eslint-disable no-undef,no-unused-vars */
import {
  building,
  exhibit,
  manager,
  mergeProgramInformation,
  program,
} from './partial';

// START:program
const setStrongHallProgram = mergeProgramInformation(building, manager);

const programInfo = setStrongHallProgram(program);

const exhibitInfo = setStrongHallProgram(exhibit);
// END:program

export { setStrongHallProgram };
