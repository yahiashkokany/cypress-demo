const { spawn } = require('child_process');
const path = require('path');

const root = path.join(__dirname, '..');
const node = process.execPath;

function run(cmd, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(node, [cmd, ...args], {
      cwd: root,
      stdio: 'inherit',
      shell: false,
      ...options,
    });
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Exited with code ${code}`));
    });
  });
}

async function main() {
  const serverScript = path.join(root, 'server.js');
  const cypressBin = path.join(root, 'node_modules', 'cypress', 'bin', 'cypress');

  const server = spawn(node, [serverScript], {
    cwd: root,
    stdio: 'inherit',
    detached: false,
  });

  await new Promise((r) => setTimeout(r, 1500));

  try {
    await run(cypressBin, ['run']);
    await run(path.join(root, 'scripts', 'merge-reports.js'), []);
  } finally {
    server.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
