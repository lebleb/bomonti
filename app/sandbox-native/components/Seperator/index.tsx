import styled from 'bomonti';
import { View } from 'react-native';

export const Seperator = styled(View)({
  borderBottomWidth: 1,
  borderBottomColor: ({ theme }) => theme.color.tertiary,
});
