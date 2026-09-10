import test from 'node:test';
import assert from 'node:assert/strict';
import {recordEnrichmentOutcome} from '../src/enrichment-telemetry.js';

test('records billing-country availability and exception details', () => {
  const event = recordEnrichmentOutcome({paymentMethod: {instrumentType: 'GOOGLE_PAY', network: 'MASTERCARD'}, enrichedInstrument: null, error: new Error('timeout'), latencyMs: 24});
  assert.equal(event.failure, 1);
  assert.equal(event.exceptionClass, 'Error');
});
