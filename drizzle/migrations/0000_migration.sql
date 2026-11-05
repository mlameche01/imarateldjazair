CREATE TABLE public.faucet_claims (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip text NOT NULL UNIQUE,
  address text NOT NULL UNIQUE,
  tx_hash text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.faucet_claims TO service_role;
ALTER TABLE public.faucet_claims ENABLE ROW LEVEL SECURITY;