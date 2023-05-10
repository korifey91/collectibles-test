import Text, { TextProps } from '@components/Text';

interface HighlightedProps extends TextProps {
  text: string;
  highlight: string;
}

function Highlighted({ text, highlight, ...textProps }: HighlightedProps) {
  if (!highlight.trim()) {
    return <Text {...textProps}>{text}</Text>;
  }

  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <Text {...textProps}>
      {parts.map((part, i) => (
        // eslint-disable-next-line react/no-array-index-key
        regex.test(part) ? <mark key={part + i}>{part}</mark> : <span key={part + i}>{part}</span>
      ))}
    </Text>
  );
}

export default Highlighted;
