import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, percentage } from '../src/math.js';

test('add adds', () => assert.equal(add(2, 3), 5));
test('percentage rounds', () => assert.equal(percentage(1, 3), 33));
test('percentage rejects a zero total', () => assert.throws(() => percentage(1, 0)));
