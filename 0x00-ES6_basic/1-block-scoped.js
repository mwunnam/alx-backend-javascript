/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
export default function taskBlock(trueOrFalse) {
<<<<<<< HEAD
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    // eslint-disable-line no-unsed-vars
    const task2 = false;
     // eslint-disable-line no-unsed-vars
=======
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
>>>>>>> 8fecb04d09eea1b0caf7f1b3056a246db0803c2d
  }

  return [task, task2];
}
