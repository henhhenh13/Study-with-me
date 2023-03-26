import { supabase } from '../../supabaseClient';
import { GrammarApiDefinitions } from './interface';

interface UseGrammarApi {
  fetchGrammars: () => Promise<GrammarApiDefinitions['Grammars']>;
}
export const useGrammarApi = (): UseGrammarApi => {
  const fetchGrammars = async (): Promise<
    GrammarApiDefinitions['Grammars']
  > => {
    const { data, error, status } = await supabase
      .from('grammars')
      .select<'*', GrammarApiDefinitions['Grammar']>('*');
    return {
      grammars: data || [],
      flags: {
        isFetched: Boolean(status === 200 && !!data?.length),
        isFetchError: !!error,
        isFetching: false,
      },
    };
  };
  return {
    fetchGrammars,
  };
};
