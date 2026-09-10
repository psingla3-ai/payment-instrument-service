export function toEnrichedInstrument(paymentMethod) {
  return {
    instrumentType: paymentMethod.instrumentType,
    network: paymentMethod.network,
    lastFour: paymentMethod.lastFour,
    billingCountry: paymentMethod.billingAddress?.countryCode?.toUpperCase() ?? null
  };
}
