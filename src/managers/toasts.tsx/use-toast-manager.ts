import { useCallback } from 'react';
import { toast } from 'sonner';

interface UseToastManager {
  successToast: (value?: string) => void;
  errorToast: (value?: string) => void;
  clearToast: () => void;
}

export const useToastManager = (): UseToastManager => {
  const successToast = useCallback((value?: string) => {
    toast.success(value || 'Exacly!');
  }, []);

  const errorToast = useCallback((value?: string) => {
    toast.error(value || 'Error!');
  }, []);

  const clearToast = useCallback(() => {
    toast.caller();
  }, []);

  return {
    successToast,
    errorToast,
    clearToast,
  };
};
