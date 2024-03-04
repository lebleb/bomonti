import { View, Image } from 'react-native';
import styled from 'bomonti';
// @ts-ignore
import Dog from '../../assets/images/dog.png';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { Seperator } from '@/components/Seperator';

export default function TabTwoScreen() {
  return (
    <Container>
      <ImageDog source={Dog} resizeMode="contain" />
      <Typography variant="title">What is Lorem Ipsum (Dog)?</Typography>
      <Typography variant="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.</Typography>
      <Seperator />
      <Button>Click Me!</Button>
    </Container>
  );
}

const Container = styled(View)(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.color.natural.white,
  paddingHorizontal: theme.spacing(5),
}));

const ImageDog = styled(Image)(({ theme }) => ({
  height: 250,
  marginBottom: theme.spacing(5),
}));
