import React from 'react';

import { Vocabulary } from '../../managers/vocabularies/interface';
import { VocabularyList } from '../vocabularies/vocabulary-list';

interface ThemeCardProps {
  themeId: string;
  theme: string;
  vocabularies: Vocabulary[] | undefined;
}
export const ThemeCard = (props: ThemeCardProps): React.ReactElement => {
  const { theme, vocabularies } = props;
  return (
    <div className="w-[400px] h-full max-h-[calc(100vh-112px)] bg-white border-4 border-blue-500">
      <h2 className="text-center py-8 text-2xl italic font-semibold">
        {theme}
      </h2>
      <VocabularyList vocabularies={vocabularies} themeId={props.themeId} />
    </div>
  );
};
