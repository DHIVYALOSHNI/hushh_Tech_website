/**
 * Minimal Plaid models used by the Network Worth Score service.
 * These interfaces intentionally include only the fields
 * consumed by calculateNWS.ts.
 */

export interface PlaidBalances {
  current?: number;
  available?: number;
  limit?: number;
}

export interface PlaidAccount {
  type?: string;
  subtype?: string;
  institution_id?: string;
  balances?: PlaidBalances;
}

export interface PlaidHolding {
  institution_value?: number;
  cost_basis?: number;
}

export interface PlaidBalanceResponse {
  accounts?: PlaidAccount[];
}

export interface PlaidInvestmentResponse {
  accounts?: PlaidAccount[];
  holdings?: PlaidHolding[];
}

export interface PlaidIdentityField {
  score?: number;
}

export interface PlaidIdentityMatch {
  legal_name?: PlaidIdentityField;
  email_address?: PlaidIdentityField;
  phone_number?: PlaidIdentityField;
  address?: PlaidIdentityField;
}

export interface UserFinancialData {
  balances?: PlaidBalanceResponse | null;
  balance_data?: PlaidBalanceResponse | null;

  investments?: PlaidInvestmentResponse | null;
  investments_data?: PlaidInvestmentResponse | null;

  identity_match?: PlaidIdentityMatch | null;
  identity_match_data?: PlaidIdentityMatch | null;
  identity_match_scores?: PlaidIdentityMatch | null;
}