import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setCameraState } from "../../store/camera";

export default function Buttons() {
  const dispatch = useDispatch();

  const onPressWalkIn = () => {
    setCameraState(false)(dispatch);
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPressWalkIn}>
        <Text style={styles.buttonText}>Walk/Drive In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Visitor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contractor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delivery</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignContent: "stretch",
    backgroundColor: "transparent",
    flexDirection: "row",
    width: 400,
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#000",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
  },
});
