import { View, Text, StyleSheet, Button } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a mi aplicación, soy Estebitan</Text>

      <Text>Esta es la frase cualquiera que pide el documento :|</Text>

      <View style={styles.botones}>
        <View style={styles.boton1}>
          <Button
            color="#841584"
            title="CONTACTS"
            onPress={() => {
              navigation.navigate("CallNumber");
            }}
          />
        </View>

        <Button
          title="PRODUCTOS"
          onPress={() => {
            navigation.navigate("ProductNavigation");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#33B747",
    alignItems: "center",
    justifyContent: "center",
  },
  botones: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  boton1: {
    marginRight: 60,
  },
});
