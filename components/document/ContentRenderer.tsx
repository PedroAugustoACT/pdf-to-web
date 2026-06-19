import React from 'react';
import { ContentElement } from '@/content/types';
import { ChapterTitle } from './ChapterTitle';
import { SectionHeading } from './SectionHeading';
import { Paragraph } from './Paragraph';
import { QuestionBlock } from './QuestionBlock';
import { ExerciseBlock } from './ExerciseBlock';
import { ContentList } from './ContentList';
import { ContentTable } from './ContentTable';

interface ContentRendererProps {
  element: ContentElement;
}

export function ContentRenderer({ element }: ContentRendererProps) {
  switch (element.type) {
    case 'chapter-title': {
      const { type, ...props } = element;
      return <ChapterTitle {...props} />;
    }
    case 'section': {
      const { type, ...props } = element;
      return <SectionHeading {...props} />;
    }
    case 'paragraph': {
      const { type, ...props } = element;
      return <Paragraph {...props} />;
    }
    case 'question': {
      const { type, ...props } = element;
      return <QuestionBlock {...props} />;
    }
    case 'exercise': {
      const { type, ...props } = element;
      return <ExerciseBlock {...props} />;
    }
    case 'list': {
      const { type, ...props } = element;
      return <ContentList {...props} />;
    }
    case 'table': {
      const { type, ...props } = element;
      return <ContentTable {...props} />;
    }
    case 'spacer': {
      const { type, ...props } = element;
      return <div style={{ height: props.height }} />;
    }
    default:
      // Compile-time exhaustiveness check ensures all types are handled
      const _exhaustiveCheck: never = element;
      return _exhaustiveCheck;
  }
}
