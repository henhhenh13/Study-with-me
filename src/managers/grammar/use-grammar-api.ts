import { supabase } from '../../supabaseClient';
import { GrammarApiDefinitions } from './interface';

export type GrammarAddApiArgs = Omit<
  GrammarApiDefinitions['Grammar'],
  'grammarId'
>;

interface UseGrammarApi {
  fetchGrammars: () => Promise<GrammarApiDefinitions['Grammars']>;
  addGrammar: (
    grammars: GrammarAddApiArgs,
  ) => Promise<GrammarApiDefinitions['GrammarAdd']>;
}

const initialGrammar: GrammarApiDefinitions['Grammar'] = {
  grammarId: 'grammarId',
  grammarName: 'grammarName',
  grammarFormula: 'grammarFormula',
  grammarExample: 'grammarExample',
  grammarDetail: 'grammarDetail',
};
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
  const addGrammar = async (
    grammars: GrammarAddApiArgs,
  ): Promise<GrammarApiDefinitions['GrammarAdd']> => {
    const { data, error, status } = await supabase
      .from('grammars')
      .insert<GrammarAddApiArgs>([{ ...grammars }])
      .select<'*', GrammarApiDefinitions['Grammar']>('*')
      .single();
    return {
      grammar: data ? data : initialGrammar,
      flags: {
        isAdded: Boolean(!!data && status === 200),
        isLoading: false,
        isError: !!error,
      },
    };
  };
  return {
    fetchGrammars,
    addGrammar,
  };
};
