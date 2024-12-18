const fs = require('fs').promises;

/**
 * Function to count student asychronously
 * @param {string} path - Path to the CVS file
 * @return {Promise} - A promise that resolves when the file is processed
 */

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
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
        let output = `Number of students: ${rows.length - 1}\n`;
        // Log the number of students in each field
        for (const field in studentCount) {
          if (Object.prototype.hasOwnProperty.call(studentCount, field)) {
            const { count, names } = studentCount[field];
            output += `Number of students in ${field}: ${count}. List: ${names.join(', ')}\n`;
          }
        }

        resolve(output);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
