import { readFile } from 'fs/promises';

const inputRaw = await readFile('./input.txt');
if (!inputRaw || inputRaw.toString().trim().length < 1) throw 'No input file was found.';

const input = inputRaw
    .toString()
    .trim()
    .split('\r\n');

const parsed = [];

let foundOne = 0, foundTwo = 0;

for (const pass of input) {
    const sps = pass.split(' ');
    const c = sps[0].split('-');
    parsed.push([
        Number(c[0]),
        Number(c[1]),
        sps[1].substring(0, 1),
        sps[2]
    ]);
}

for (const [min, max, char, pass] of parsed) {
    let count = 0;
    for (const pChar of pass) if (pChar === char) ++count;
    if ((count >= min) && (count <= max)) ++foundOne;
}

console.log('Part one:', foundOne);

for (const [min, max, char, pass] of parsed) {
    let count = 0;
    if ((pass.charAt(min - 1) === char)) ++count;
    if ((pass.charAt(max - 1) === char)) ++count;
    if (count === 1) ++foundTwo;
}

console.log('Part two:', foundTwo);
