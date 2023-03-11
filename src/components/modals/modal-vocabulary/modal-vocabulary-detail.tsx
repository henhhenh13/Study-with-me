import NiceModal, { useModal } from '@ebay/nice-modal-react';
import React from 'react';
import { FaEdit } from 'react-icons/fa';

import { Button } from '../../../elements/button';
import { EditParagraph } from '../../../elements/edit-paragraph';
import { ModalWrapper } from '../modal-wrapper/modal-wrapper';

interface ModalVocabularyDetailProps {
  props: {
    vocabulary: string;
    detail: string;
  };
}
export const ModalVocabularyDetail = NiceModal.create(
  ({ props }: ModalVocabularyDetailProps): React.ReactElement => {
    const { hide, visible, remove } = useModal();
    return (
      <ModalWrapper close={hide} onAfterClose={remove} isShow={visible}>
        <div className="w-full divide-y pb-4">
          <div className="flex items-center px-4 py-2 space-x-2 text-lg text-blue-500">
            <FaEdit />
            <h2>Vocabulary detail</h2>
          </div>
          <div className="min-h-[250px] w-full py-7 px-4 space-y-3">
            <h2 className="text-center text-xl text-green-500">
              {props.vocabulary}
            </h2>
            <EditParagraph areaClassName="w-full" content={props.detail} />
          </div>
          <Button
            color="primary"
            variants="background"
            className="mx-auto px-7 py-1.5"
            onClick={hide}
          >
            I see
          </Button>
        </div>
      </ModalWrapper>
    );
  },
);
