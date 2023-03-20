import React from 'react';

import { SerializedVocabulary } from '../../managers/vocabularies/interface';
import { VocabularyTable } from '../vocabularies/vocabulary-table';

interface ThemeCardProps {
  themeId: string;
  theme: string;
  vocabularies: SerializedVocabulary[] | undefined;
}
export const ThemeCard = (props: ThemeCardProps): React.ReactElement => {
  const { theme, vocabularies } = props;
  return (
    <div className="w-[400px] h-full max-h-[calc(100vh-112px)] bg-white border-4 border-blue-500">
      <h2 className="text-center py-8 text-2xl italic font-semibold">
        {theme}
      </h2>
      <VocabularyTable vocabularies={vocabularies} themeId={props.themeId} />
    </div>
  );
};
