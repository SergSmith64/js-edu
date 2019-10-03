/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = { family: 4 }
) {
  let hoursBasic = 500;
  let hoursProgramming = 800;
  let weeks = 0;

  if (knowsProgramming) {
    hours = hoursProgramming;
  } else {
    hours = hoursBasic + hoursProgramming;
  }
  
  let i = hours;
  while ( i > 0) {
      i -= config[focus];
      weeks++;
  }
  return weeks;
};