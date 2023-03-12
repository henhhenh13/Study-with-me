import NiceModal, { useModal } from '@ebay/nice-modal-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';

import { Button } from '../../../elements/button';
import { ModalWrapper } from '../modal-wrapper/modal-wrapper';

interface ModalVocabularyDetailProps {
  props: {
    vocabulary: string;
    translationVocabulary: string;
    detail: string | null;
    onTextAreaSubmit: (value: string) => void;
  };
}
export const ModalVocabularyDetail = NiceModal.create(
  ({ props }: ModalVocabularyDetailProps): React.ReactElement => {
    const { detail, vocabulary, translationVocabulary, onTextAreaSubmit } =
      props;
    const { hide, visible, remove } = useModal();
    const [value, setValue] = useState(detail || '');

    const isEdited = useMemo(() => {
      return detail !== value;
    }, [detail, value]);

    return (
      <ModalWrapper close={hide} onAfterClose={remove} isShow={visible}>
        <div className="w-full divide-y pb-4">
          <div className="flex items-center px-4 py-2 space-x-2 text-lg text-blue-500">
            <FaEdit />
            <h2>Vocabulary detail</h2>
          </div>
          <div className="min-h-[250px] w-full py-7 px-4 space-y-3">
            <h2 className="text-center text-2xl text-green-500">
              {vocabulary} - {translationVocabulary}
            </h2>
            <textarea
              onChange={(e) => setValue(e.target.value)}
              autoFocus
              className="w-full min-h-[200px] outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg"
              value={value}
              placeholder="Enter detail..."
            />
          </div>
          <div className="flex items-center !border-t-0 justify-center space-x-3">
            <Button
              disabled={!isEdited}
              color="primary"
              variants="background"
              className="w-[96px] py-1.5"
              onClick={() => {
                if (isEdited) {
                  onTextAreaSubmit(value);
                  hide();
                }
              }}
            >
              Edit
            </Button>
            <Button
              color="normally"
              variants="background"
              className="w-[96px] py-1.5"
              onClick={hide}
            >
              Close
            </Button>
          </div>
        </div>
      </ModalWrapper>
    );
  },
);
