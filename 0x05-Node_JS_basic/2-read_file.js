const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const rows = data.split('\n').filter(row => row.trim() !== '');
  console.log(rows);


  if (rows.length < 2) {
    console.log('Number of student: 0')
    return
  }

  const studentCount = {};
  for (const row of rows.slice(1)) {
    const [firstName, , , field] = row.split(',');

    if (field in studentCount) {
      studentCount[field].count++;
      studentCount[field].names.push(firstName);
    } else {
      studentCount[field] = {
        count: 1,
        names: [firstName],
      };
    }
  }

  const totalStudents = rows.length - 1;
  console.log(`Number of students: ${totalStudents}`);

  for (const field in studentCount) {
    const { count, names } = studentCount[field];
    console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
