process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString();
  process.stdout.write(`Your name is: ${name}\r`);

  if (process.stdin.isTTY) {
    process.exit();
  } else {
    process.stdin.end();
  }
});

process.stdin.on('end', () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
