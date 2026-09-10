export function recordEnrichmentOutcome({paymentMethod, enrichedInstrument, error, latencyMs}) {
  return {event: 'instrument.enrichment.outcome', instrumentType: paymentMethod.instrumentType, network: paymentMethod.network, billingCountryAvailable: Boolean(enrichedInstrument?.billingCountry), exceptionClass: error?.constructor?.name ?? null, failure: error ? 1 : 0, latencyMs};
}
