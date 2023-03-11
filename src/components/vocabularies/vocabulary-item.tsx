import React, { KeyboardEvent, useCallback, useRef, useState } from 'react';

import { Button } from '../../elements/button';
import { useToastManager } from '../../managers/toast-manager.tsx/use-toat-manager';
import { VocabulariesState } from '../../managers/vocabulary/vocabulary-state';
import { useVocabularyThemeManager } from '../../managers/vocabulary-theme/use-vocabulary-theme-manager';

export interface VocabularyItemProps {
  vocabularies: VocabulariesState[] | undefined;
  themeId: string;
}
export const VocabularyItem = ({
  themeId,
  vocabularies,
}: VocabularyItemProps): React.ReactElement => {
  const { addVocabularyInTheme } = useVocabularyThemeManager();
  const [newVocabulary, setNewVocabulary] = useState<string>('');
  const [newTranslationVocabulary, setNewTranslationVocabulary] =
    useState<string>('');
  const listRef = useRef<HTMLUListElement>(null);
  const firstInput = useRef<HTMLInputElement>(null);
  const { successToast, errorToast } = useToastManager();

  const onClearInput = useCallback(() => {
    setNewTranslationVocabulary('');
    setNewVocabulary('');
  }, []);

  const focusFirstInput = useCallback(() => {
    if (firstInput) {
      firstInput.current?.focus();
    }
  }, []);

  const handleFirstInputFocus = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const canFirstInputFocus =
        newTranslationVocabulary === '' && e.key === 'Backspace';
      if (canFirstInputFocus) {
        focusFirstInput();
      }
    },
    [focusFirstInput, newTranslationVocabulary],
  );

  const scrollBottomList = useCallback(() => {
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTo(0, listRef.current.scrollHeight);
      }
    });
  }, []);

  const handleAddVocabulary = useCallback(() => {
    const canAdd = newVocabulary && newTranslationVocabulary;
    if (canAdd) {
      addVocabularyInTheme({
        vocabulary: newVocabulary,
        themeId,
        translationVn: newTranslationVocabulary,
        detail: null,
      });
      onClearInput();
      scrollBottomList();
      focusFirstInput();
      successToast(`You added "${newVocabulary}"`);
    } else {
      errorToast('Please do not empty form!');
    }
  }, [newVocabulary, newTranslationVocabulary]);

  return (
    <ul
      ref={listRef}
      className="w-full max-w-full overflow-hidden h-[calc(100vh-222px)] overflow-y-auto px-4 divide-y scroll-smooth"
    >
      {vocabularies &&
        vocabularies.map(({ vocabularyId, vocabulary, translations }) => (
          <li
            key={`${vocabulary}-${vocabularyId}`}
            className="w-full flex items-center justify-between py-1"
          >
            <div>
              <span className="font-bold capitalize">{vocabulary}</span>
              <span className="mx-2">-</span>
              <span className="">{translations.vn}</span>
            </div>
            <div className="space-x-2.5 flex items-center">
              <Button variants="text" color="primary" className="text-blue-400">
                Edit
              </Button>

              <Button variants="text" color="danger" className="text-red-400">
                Delete
              </Button>
            </div>
          </li>
        ))}
      <li className="flex items-center justify-between py-1.5">
        <div className="flex">
          <input
            ref={firstInput}
            value={newVocabulary}
            onChange={(e) => setNewVocabulary(e.target.value)}
            className="outline-none max-w-[110px] text-left font-bold"
            placeholder="English"
          />
          <span className="mr-6">-</span>
          <input
            value={newTranslationVocabulary}
            onChange={(e) => setNewTranslationVocabulary(e.target.value)}
            onKeyUp={handleFirstInputFocus}
            className="outline-none max-w-[100px] text-left"
            placeholder="Vietnamese"
          />
        </div>
        <Button
          onClick={handleAddVocabulary}
          variants="background"
          color="primary"
          className="px-3.5 py-1"
        >
          Add
        </Button>
      </li>
    </ul>
  );
};
