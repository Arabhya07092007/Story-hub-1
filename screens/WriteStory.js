import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import { Header } from "react-native-elements";

export default class ReadStory extends React.Component {
  constructor() {
    super();
    this.state = {
      storyTitle: "",
      author: "",
      story: "",
    };
  }

  render() {
    return (
      <View style={styles.cont}>
        <Header
          backgroundColor="#8C76A4"
          centerComponent={{
            text: "Write story",
            style: { fontSize: 30, color: "#F9F5F3", fontWeight: "bold" },
          }}
        />

        <TextInput
          style={[styles.txt, { padding: 5 }]}
          multiline={true}
          underLineColorAndroid="transparent"
          placeholder="Title"
          placeholderTextColor="#3C5BA6"
          value={this.state.storyTitle}
          onChangeText={(text) => {
            this.setState({ storyTitle: text });
          }}
        />

        <TextInput
          style={[styles.txt, { padding: 5 }]}
          underLineColorAndroid="transparent"
          placeholder="Title"
          placeholderTextColor="#3C5BA6"
          value={this.state.author}
          onChangeText={(text) => {
            this.setState({ author: text });
          }}
        />

        <TextInput
          style={[
            styles.txt,
            { height: "20%", textAlignVertical: "top", padding: 10 },
          ]}
          multiline={true}
          underLineColorAndroid="transparent"
          placeholder="Title"
          placeholderTextColor="#3C5BA6"
          value={this.state.story}
          onChangeText={(text) => {
            this.setState({ story: text });
          }}
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  txt: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 20,
  },
  btn: {
    width: "50%",
    backgroundColor: "lightgreen",
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  btnText: {
    fontSize: 25,
    padding: 10,
    textAlign: "center",
  },
});
