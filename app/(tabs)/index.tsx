import { Image, StyleSheet, Platform, View, Text, Button, Alert } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Look, Malcolm made an app!</Text>
      <Button title="Tap here, Saeri!" color="grey" onPress={() => Alert.alert("Good night, my love!")}></Button>
      <Text>Do it! Do it, nooow!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  }
});
