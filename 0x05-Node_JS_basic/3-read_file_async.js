const fs = require('fs').promises;

/**
 * Function to count student asychronously
 * @param {string} path - Path to the CVS file
 * @return {Promise} - A promise that resolves when the file is processed
 */

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      // Split the data into rwos and filter out empty rows
      const rows = data.split('\n').filter((row) => row.trim() !== '');

      if (rows.length < 2) {
        console.log('Number of student: 0');
        return;
      }

      // Parse the CSV count Students by field
      const studentCount = {};
      for (const row of rows.slice(1)) {
        const [firstName, , , field] = row.split(',');

        if (field in studentCount) {
          studentCount[field].count += 1;
          studentCount[field].names.push(firstName);
        } else {
          studentCount[field] = {
            count: 1,
            names: [firstName],
          };
        }
      }

      // Log total number of students
      const totalStudents = rows.length - 1;
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students in each field
      for (const field in studentCount) {
        if (Object.property.hasOwnProperty.call(studentCount, field)) {
          const { count, names } = studentCount[field];
          console.log(`Number of student in ${field}: ${count}. List: ${names.join(', ')}`);
        }
      }
    });
}

module.exports = countStudents;
