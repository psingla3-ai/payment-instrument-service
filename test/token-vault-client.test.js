import test from 'node:test';
import assert from 'node:assert/strict';
import {TokenVaultClient} from '../src/token-vault-client.js';

test('returns a wallet method that can omit billing data', () => {
  assert.equal(new TokenVaultClient().getPaymentMethod('applePay').billingAddress, null);
});
