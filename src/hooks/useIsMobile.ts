import { useMedia } from 'react-use';

export function useIsMobile(): boolean {
  return useMedia('(max-width: 600px)');
}
