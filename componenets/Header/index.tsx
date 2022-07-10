import moment from "moment";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { condoName, location } from "../../consts";

export default function Header() {
  const backgroundImg = require("../../assets/centra-heights.png");
  const dateTime = moment().format("DD MMM YYYY, hh:mm:ss");

  return (
    <View style={styles.header}>
      <QRCode value="https://demo.meanto.io/visitor" />
      <View style={styles.header}>
        <ImageBackground
          source={backgroundImg}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text}>
            {`${condoName}\n`}
            {`${location}\n\n`}
            {`${dateTime}`}
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  image: {
    height: "100%",
    color: "white",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
