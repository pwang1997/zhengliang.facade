import readingDuration from 'reading-duration';

export const estimateReadingDuration = (mdContent: string) => {
  return readingDuration(mdContent, {
    wordsPerMinute: 100,
    emoji: false,
  });
};
