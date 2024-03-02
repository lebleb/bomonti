import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import styled from '../../../../packages/bomonti';

export default function TabOneScreen() {
  return (
    <Container>
      <Title>Tab One</Title>
      <Seperator />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </Container>
  );
}

const Container = styled(View)(({ theme }) => ({
  mobile: { alignItems: 'flex-start' },
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.color.red,
}));

const Title = styled(Text)({
  fontSize: 20,
  fontWeight: 'bold',
});

const Seperator = styled(Text)({
  marginVertical: 30,
  height: 1,
  width: '80%',
  backgroundColor: ({ theme }) => theme.color.kakak
});
