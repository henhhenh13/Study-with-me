import { useModal } from '@ebay/nice-modal-react';
import React, { KeyboardEvent, useCallback, useRef, useState } from 'react';

import { Button } from '../../elements/button';
import { useToastManager } from '../../managers/toast-manager.tsx/use-toat-manager';
import { useVocabularyManager } from '../../managers/vocabularies/use-vocabulary-manager';
import { ModalVocabularyDetail } from '../modals/modal-vocabulary/modal-vocabulary-detail';

interface VocabularyItemAddProps {
  themeId: string;
  onCompleteAdded: () => void;
}
export const VocabularyItemAdd = ({
  themeId,
  onCompleteAdded,
}: VocabularyItemAddProps): React.ReactElement => {
  const firstInput = useRef<HTMLInputElement>(null);
  const { successToast, errorToast } = useToastManager();
  const [newTranslationVocabulary, setNewTranslationVocabulary] =
    useState<string>('');
  const [detail, setDetail] = useState<string | null>(null);
  const [newVocabulary, setNewVocabulary] = useState<string>('');
  const { show } = useModal(ModalVocabularyDetail);
  const { addVocabulary } = useVocabularyManager();
  const onClearInput = useCallback(() => {
    setNewTranslationVocabulary('');
    setNewVocabulary('');
  }, []);

  const focusFirstInput = useCallback(() => {
    if (firstInput) {
      firstInput.current?.focus();
    }
  }, []);

  const handleAddVocabulary = useCallback(async () => {
    const canAdd = newVocabulary && newTranslationVocabulary;
    if (canAdd) {
      const vocabulary = await addVocabulary({
        vocabulary: newVocabulary,
        translation: newTranslationVocabulary,
        themeId,
      });

      console.log(vocabulary);
      onClearInput();
      focusFirstInput();
      successToast(`You added "${newVocabulary}"`);
      onCompleteAdded();
      setDetail(null);
    } else {
      errorToast('Please do not empty form!');
    }
  }, [newVocabulary, newTranslationVocabulary, detail]);

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

  const handleShowModalVocabularyDetail = useCallback(() => {
    const canShow = newTranslationVocabulary && newVocabulary;
    if (canShow) {
      show({
        props: {
          vocabulary: newVocabulary,
          translationVocabulary: newTranslationVocabulary,
          detail: detail,
          onTextAreaSubmit: setDetail,
        },
      });
    } else {
      errorToast(
        'If you want add detail for this vocabularies, you do not empty all input!',
      );
    }
  }, [detail, errorToast, newTranslationVocabulary, newVocabulary, show]);

  return (
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
      <div className="flex items-center space-x-2">
        <Button
          onClick={handleShowModalVocabularyDetail}
          variants="text"
          color="primary"
          className="text-blue-500"
        >
          Detail
        </Button>
        <Button
          onClick={handleAddVocabulary}
          variants="background"
          color="primary"
          className="px-3.5 py-1"
        >
          Add
        </Button>
      </div>
    </li>
  );
};
