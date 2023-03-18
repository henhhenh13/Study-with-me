import { supabase } from '../../supabaseClient';
import { UnitsApiDefinitions } from './interface';

interface UseUnitApi {
  fetchUnits: () => Promise<UnitsApiDefinitions['Units']>;
}

export const useUnitApi = (): UseUnitApi => {
  const fetchUnits = async (): Promise<UnitsApiDefinitions['Units']> => {
    const { data, status, error } = await supabase
      .from('units')
      .select<'*', UnitsApiDefinitions['UnitApi']>('*');
    return {
      units: data || [],
      flags: {
        isFetched: Boolean(data && status === 200),
        isFetchError: !!error,
        isFetching: false,
      },
    };
  };
  return {
    fetchUnits,
  };
};
