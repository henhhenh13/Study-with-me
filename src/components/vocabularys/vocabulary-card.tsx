import React from 'react';

import { VocabularyState } from '../../managers/vocabulary/vocabulary-state';
import { VocabularyItem } from './vocabulary-item';

interface VocabularyCardProps {
  themeId: string;
  theme: string;
  vocabularys: VocabularyState[] | undefined;
}
export const VocabularyCard = (
  props: VocabularyCardProps,
): React.ReactElement => {
  const { theme, vocabularys } = props;
  return (
    <div className="w-[400px] h-full max-h-[calc(100vh-112px)] bg-white border-4 border-blue-500">
      <h2 className="text-center py-8 text-2xl italic font-semibold">
        {theme}
      </h2>
      <VocabularyItem vocabularys={vocabularys} themeId={props.themeId} />
    </div>
  );
};
