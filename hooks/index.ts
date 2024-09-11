import { useConfigStore } from '@/state/providers/quiz-config-store-provider';

export const useReplacePlaceholdersByCustomerData = (str: string): string => {
  const customerData = useConfigStore((state) => state.customer);
  return str.replace(/{([^}]+)}/g, (match, placeholder) => {
    return customerData[placeholder.toLowerCase()] || match;
  });
};
