import { useNavigation } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";

export default function CreatingAccount() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.CreateAccountDashboard}>

      <View style={styles.blue}>
        <Text style={styles.phrase2}>Create Account</Text>
        <Text style={styles.alreadyHaveAnAccount}>
          Already have an account?
        </Text>

        <TouchableOpacity style={styles.signInText1}>
          <Text
            style={styles.signInText2}
            onPress={() => navigation.navigate("Login")}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton1}>
        <Text
          style={styles.backButton2}
          onPress={() => navigation.navigate("Login")}>Back</Text>
      </TouchableOpacity>

      <View style={styles.white2}>
        <View style={styles.usernameinput}>
          <TextInput
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderWidth: 2,
              borderColor: "#6495ed",
            }}
            label="Create username"
          />
        </View>

        <View style={styles.createPasswordInput}>
          <TextInput
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderWidth: 2,
              borderColor: "#6495ed",
            }}
            label="Create password"
          />
        </View>

        <View style={styles.fullName}>
          <TextInput
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderWidth: 2,
              borderColor: "#6495ed",
            }}
            label="Enter fullname"
          />
        </View>

        <View style={styles.email}>
          <TextInput
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderWidth: 2,
              borderColor: "#6495ed",
            }}
            label="Email address"
          />
        </View>

        <View style={styles.contactNumber}>
          <TextInput
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderWidth: 2,
              borderColor: "#6495ed",
            }}
            label="Contact number"
          />
        </View>

        

          <View style={styles.frame}>
            <TouchableOpacity style={styles.administrator1}>
              <Text style={styles.administrator2}>Administrator</Text>
            </TouchableOpacity>

            <Text style={styles.or}>Or</Text>

            <TouchableOpacity style={styles.employee1}>
              <Text style={styles.employee2}>Employee</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.createAccount1}>
          <Text style={styles.createAccount2} onPress={() => navigation.navigate("Dashboard")}>Create Account</Text>
          </TouchableOpacity>

      </View>

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  CreateAccountDashboard: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "white",
  },

  image: {
    height: "100%",
    width: "100%",
  },

  backButton1: {
    top: -300,
    left: 13,
  },

  backButton2: {
    color: "white",
    textAlignVertical: "center",
    fontSize: 20,
  },

  blue: {
    width: "100%",
    height: 320,
    backgroundColor: "#6495ed",
    alignItems: "center",
  },

  phrase2: {
    color: "white",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 35,
    top: 60,
  },

  alreadyHaveAnAccount: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    top:80,
  },

  signInText1: {
    top:85,
  },

  signInText2: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 17,
    fontWeight: "bold",
  },

  white2: {
    width: "100%",
    height: "75%",
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    top: -140,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  usernameinput: {
    width: "90%",
    margin:5,
  },

  createPasswordInput: {
    width: "90%",
    margin:5,
  },

  fullName: {
    width: "90%",
    margin:5,
  },

  email: {
    width: "90%",
    margin:5,
  },

  contactNumber: {
    width: "90%",
    margin:5,
  },

  frame:{
    backgroundColor:'white',
    height:'13%',
    width:'100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  administrator1: {
    margin:5,
  },

  administrator2: {
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    textAlignVertical: "center",
    width: 150,
    height: 40,
    borderColor: "#6495ed",
    borderWidth: 3,
    borderRaduis: 20,
    fontWeight: "bold",
    fontSize: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  employee1: {
    margin:5,
  },

  employee2: {
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    textAlignVertical: "center",
    width: 150,
    height: 40,
    borderColor: "#6495ed",
    borderWidth: 3,
    borderRaduis: 20,
    fontWeight: "bold",
    fontSize: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  
  or: {
    margin:5,
    color: "black",
    fontSize: 17,
  },

  createAccount1: {
  },

  createAccount2: {
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    textAlignVertical: "center",
    width: 220,
    height: 40,
    borderColor: "#6495ed",
    borderWidth: 3,
    borderRaduis: 20,
    fontWeight: "bold",
    fontSize: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

});
