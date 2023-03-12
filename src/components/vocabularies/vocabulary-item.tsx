import { useModal } from '@ebay/nice-modal-react';
import React from 'react';

import { Button } from '../../elements/button';
import { SerializedVocabulary } from '../../managers/vocabulary/serialized-vocabulary';
import { ModalVocabularyDetail } from '../modals/modal-vocabulary/modal-vocabulary-detail';

interface VocabularyItemProps {
  vocabularyProps: SerializedVocabulary;
}
export const VocabularyItem = ({
  vocabularyProps,
}: VocabularyItemProps): React.ReactElement => {
  const { vocabulary, translations, flags, detail } = vocabularyProps;
  const { show } = useModal(ModalVocabularyDetail);

  return (
    <li className="w-full flex items-center justify-between py-1">
      <div>
        <span className="font-bold capitalize">{vocabulary}</span>
        <span className="mx-2">-</span>
        <span className="">{translations.vn}</span>
      </div>
      <div className="space-x-2.5 flex items-center">
        {flags.hasDetail ? (
          <Button
            variants="text"
            color="primary"
            className="disabled:text-gray-300"
            onClick={() => {
              if (flags.hasDetail) {
                show({
                  props: {
                    vocabulary,
                    detail,
                    translationVocabulary: translations.vn,
                    onTextAreaSubmit: () => undefined,
                  },
                });
              }
            }}
          >
            Detail
          </Button>
        ) : null}
        <Button variants="text" color="danger" className="text-red-400">
          Delete
        </Button>
      </div>
    </li>
  );
};
