// Runs a program with its arguments as they are: never through a shell, so no argument is ever read as a command.
import { execFileSync } from 'node:child_process';

/** @param {string} cmd @param {string[]} args @returns {string} */
export const run = (cmd, args) => execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });
