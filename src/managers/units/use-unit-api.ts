import { supabase } from '../../supabaseClient';
import { UnitsApiDefinitions } from './interface';

interface UseUnitApi {
  fetchUnits: () => Promise<UnitsApiDefinitions['Units']>;
}

export const useUnitApi = (): UseUnitApi => {
  const fetchUnits = async (): Promise<UnitsApiDefinitions['Units']> => {
    const { data, status, error } = await supabase
      .from('units')
      .select<
        '*, exercises(exerciseId,exerciseType,title,themeId)',
        UnitsApiDefinitions['UnitApi']
      >('*, exercises(exerciseId,exerciseType,title,themeId)');
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
