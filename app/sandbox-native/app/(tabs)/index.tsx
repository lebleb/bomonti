import { View, Image } from 'react-native';
import styled from 'bomonti';
// @ts-ignore
import Cat from '../../assets/images/cat.png';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { Seperator } from '@/components/Seperator';
import { FlexBox } from '@/components/FlexBox';

export default function TabOneScreen() {
  return (
    <Container>
      <ImageCat source={Cat} resizeMode="contain" />
      <FlexBox marginBottom={5} isCentered>
        <Typography variant="title">What is Lorem Ipsum (Cat)?</Typography>
      </FlexBox>
      <FlexBox marginBottom={5}>
        <Typography variant="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled
          it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker
          including versions of Lorem Ipsum.</Typography>
      </FlexBox>
      <FlexBox marginBottom={5}>
        <Seperator />
      </FlexBox>
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

const ImageCat = styled(Image)(({ theme }) => ({
  height: 250,
  marginBottom: theme.spacing(5),
}));
