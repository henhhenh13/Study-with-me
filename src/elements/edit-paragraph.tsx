import React, { useEffect, useRef, useState } from 'react';

interface EditParagraphProps {
  content: string;
  areaClassName?: string;
  paragraphClassName?: string;
}
export const EditParagraph = (
  props: EditParagraphProps,
): React.ReactElement => {
  const { content, areaClassName, paragraphClassName } = props;
  const [isEdit, setIsEdit] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEdit && textAreaRef.current) {
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [isEdit]);

  if (isEdit) {
    return (
      <textarea
        ref={textAreaRef}
        className={areaClassName}
        defaultValue={content}
      />
    );
  } else {
    return (
      <p className={paragraphClassName} onClick={() => setIsEdit(true)}>
        {content}
      </p>
    );
  }
};
