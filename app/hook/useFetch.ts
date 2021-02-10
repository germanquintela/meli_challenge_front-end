import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

export const useFetch = <Result, Params>(action: (arg0: Params) => Promise<Result | void>): [
  Result | undefined, boolean, Error | undefined, (v: Params) => void
] => {
  const router = useRouter();
  const [result, setResult] = useState<Result>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const executeAccion = async (serviceParam: Params) => {
    try {
      setLoading(true);

      const res = await action(serviceParam);
      setResult(res);
      setLoading(false);
    } catch (err) {
      router.push({ pathname: '/error', query: { status: err.status, message: err.message } }, '/');
      setError(err);
    }
  };

  const getData = (value: Params) => {
    executeAccion(value);
  };

  return [result, isLoading, error, getData];
};
