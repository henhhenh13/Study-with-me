import React, { useCallback, useMemo, useRef } from 'react';

import { Vocabulary } from '../../managers/vocabularies/interface';
import { VocabularyItem } from './vocabulary-item';
import { VocabularyItemAdd } from './vocabulary-item-add';

export interface VocabularyTableProps {
  vocabularies: Vocabulary[] | undefined;
  themeId: string;
}
export const VocabularyList = ({
  themeId,
  vocabularies,
}: VocabularyTableProps): React.ReactElement => {
  const listRef = useRef<HTMLUListElement>(null);

  const scrollBottomList = useCallback(() => {
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTo(0, listRef.current.scrollHeight);
      }
    });
  }, []);

  const render = useMemo(() => {
    if (!vocabularies) return null;
    return vocabularies.map((vocabulary) => (
      <VocabularyItem
        key={vocabulary.vocabularyId}
        vocabularyProps={vocabulary}
      />
    ));
  }, [vocabularies]);

  return (
    <ul
      ref={listRef}
      className="w-full max-w-full overflow-hidden h-[calc(100vh-222px)] overflow-y-auto px-4 divide-y scroll-smooth"
    >
      {render}
      <VocabularyItemAdd themeId={themeId} onCompleteAdded={scrollBottomList} />
    </ul>
  );
};
