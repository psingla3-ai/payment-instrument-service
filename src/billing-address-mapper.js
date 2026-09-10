export function mapBillingAddress(billingAddress) {
  return billingAddress ? {countryCode: billingAddress.countryCode?.toUpperCase() ?? null} : null;
}
