import styled from 'bomonti';
import { Pressable } from 'react-native';
import { Typography } from '@/components/Typography';

export const Wrapper = styled(Pressable)(({ theme }) => ({
  borderRadius: theme.spacing(4),
  paddingVertical: theme.spacing(4),
  paddingHorizontal: theme.spacing(10),
  backgroundColor: theme.color.secondary,
}));

type ButtonProps = {
  onPress?: () => void
  children: string
}

export const Button = ({ onPress, children }: ButtonProps) => {
  return <Wrapper onPress={onPress}><Typography variant="paragraph">{children}</Typography></Wrapper>;
};
