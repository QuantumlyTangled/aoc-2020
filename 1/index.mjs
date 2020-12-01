// TODO: Add the challenge text to file

import { readFile } from 'fs/promises';

const inputRaw = await readFile('./input.txt');
if (!inputRaw || inputRaw.toString().trim().length < 1) throw 'No input file was found.';

const input = inputRaw
    .toString()
    .trim()
    .split('\r\n')
    .map(e => Number(e));

const kYear = 2020;

let n1, n2, n3;

for (let i = 0; i < input.length; ++i) {
    for (let j = 0; j < i; ++j) {
        if (input[i] + input[j] == kYear) {
            n1 = input[i];
            n2 = input[j];
            break;
        }
    }
}

console.log('Part one:', n1 * n2);

for (let i = 0; i < input.length; ++i) {
    for (let j = 0; j < i; ++j) {
        for (let k = 0; k < j; ++k) {
            if (input[i] + input[j] + input[k] == kYear) {
                n1 = input[i];
                n2 = input[j];
                n3 = input[k];
                break;
            }
        }
    }
}

console.log('Part two:', n1 * n2 * n3);
