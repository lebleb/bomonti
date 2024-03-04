import styled from 'bomonti';
import { View } from 'react-native';

type Props = {
  marginBottom?: number;
  isCentered?: boolean
}
export const FlexBox = styled(View)<Props>(({ theme, marginBottom = 0, isCentered = false }) => ({
  marginBottom: theme.spacing(marginBottom),
  width: '100%',
  alignItems: isCentered ? 'center' : null,
}));
