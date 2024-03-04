import { StyleSheet } from 'react-native';

import { Text, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} />
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis sapien a sem feugiat auctor. In
        pulvinar eget metus a cursus. Nulla interdum libero ac mi ornare, nec tincidunt dui tincidunt. Phasellus
        fermentum et justo vel lacinia. Integer porta, est non cursus placerat, mi leo malesuada arcu, ut luctus purus
        dui nec risus. Donec sit amet sem eget tortor fringilla scelerisque quis non leo. Morbi viverra ex vestibulum
        velit fringilla aliquet.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
