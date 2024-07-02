/* eslint-disable no-unused-vars */
function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((students) => students.location === city);
}
