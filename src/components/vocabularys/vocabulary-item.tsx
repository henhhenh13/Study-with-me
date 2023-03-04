import React from 'react';

import { Button } from '../../elements/button';
import { VocabularyState } from '../../managers/vocabulary/vocabulary-state';

export interface VocabularyItemProps {
  vocabularys: VocabularyState[] | undefined;
}
export const VocabularyItem = ({
  vocabularys,
}: VocabularyItemProps): React.ReactElement => {
  console.log(vocabularys);
  return (
    <ul className="w-full h-[calc(100vh-222px)] overflow-y-auto px-4 divide-y">
      {vocabularys &&
        vocabularys.map(({ vocabularyId, vocabulary, translations }) => (
          <li
            key={vocabularyId}
            className="w-full flex items-center justify-between py-1"
          >
            <div>
              <span className="font-bold">{vocabulary}</span>
              <span className="mx-2">-</span>
              <span className="">{translations.vn}</span>
            </div>
            <div className="space-x-2.5 flex items-center">
              <Button variants="text" color="primary">
                Edit
              </Button>
              <Button variants="text" color="danger">
                Delete
              </Button>
            </div>
          </li>
        ))}
    </ul>
  );
};
