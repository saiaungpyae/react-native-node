import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { useDispatch, useSelector } from "react-redux";
import { TypedReducer } from "../../store";
import { setSnackBarState } from "../../store/snackbar";
import { condoName, location } from "../../consts";

export default function Body() {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [blockNumber, setBlockNumber] = useState<any>("");
  const dispatch = useDispatch();
  const { camera } = useSelector((state: TypedReducer) => state.camera);
  const apiUrl = Constants.manifest?.extra?.apiUrl || "http://localhost:3000";

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleSubmit = async () => {
    setBlockNumber("");
    await fetch(`${apiUrl}/walkin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        condoName: condoName,
        location: location,
        enterDate: new Date().toISOString(),
        blockNumber: Number(blockNumber),
        remark: "",
      }),
    })
      .then(async (res) => {
        if (res.ok) {
          setSnackBarState({ open: true, message: "Success" })(dispatch);
        } else {
          const responseJson = await res.json();
          setSnackBarState({
            open: true,
            message: responseJson.message || "Fail",
          })(dispatch);
        }
      })
      .catch((err) => {
        setSnackBarState({ open: true, message: err.message || "Fail" })(
          dispatch
        );
      })
      .finally(() => {
        Keyboard.dismiss();
      });
  };

  return camera.open ? (
    <Camera style={styles.camera} type={CameraType.front}>
      <View style={styles.cameraView}></View>
    </Camera>
  ) : (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(value) =>
            setBlockNumber(value.replace(/[^0-9]/gi, ""))
          }
          maxLength={9} 
          value={blockNumber}
          placeholder="Block number"
          keyboardType="numeric"
        />
      </SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={!blockNumber}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "70%",
  },
  camera: {
    flex: 1,
  },
  cameraView: {
    width: 400,
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
