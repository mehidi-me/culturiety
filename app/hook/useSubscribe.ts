'use client';

import { useState } from 'react';

interface SubscribePayload {
  email: string;
  name?: string;
  message?: string;
}

interface SubscribeResponse {
  loading: boolean;
  error: string | null;
  data: any;
  subscribe: (payload: SubscribePayload) => Promise<void>;
}

export function useSubscribe(): SubscribeResponse {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const subscribe = async ({ email, name, message }: SubscribePayload) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email, name, message }),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Something went wrong');

      setData(json);
      return json;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, subscribe };
}
