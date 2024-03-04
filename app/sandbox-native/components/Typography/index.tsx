import styled from 'bomonti';
import { Text } from 'react-native';

export const StyledTextParagraph = styled(Text)(({ theme }) => ({
  fontSize: 16,
  color: theme.color.natural.gray1,
}));


export const StyledTextTitle = styled(StyledTextParagraph)({
  fontSize: 20,
  fontWeight: 'bold',
});


type StyledTextProps = {
  variant: 'title' | 'paragraph',
  children: string
}

export const Typography = ({ variant, children }: StyledTextProps) => {
  if (variant === 'title') {
    return <StyledTextTitle>{children}</StyledTextTitle>;
  }
  return <StyledTextParagraph>{children}</StyledTextParagraph>;
};
