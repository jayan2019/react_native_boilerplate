import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: "#035C63",
    height: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    color: "#FFF",
    fontSize: 20,
    marginTop: 5
  },
  email: {
    color: "#FFF",
    fontSize: 15
  },
  footerTab: {
    backgroundColor: "transparent",
    alignItems: "center",
    borderTopWidth: 0
  },
  footer: {
    backgroundColor: "transparent",
    elevation: 0,
    borderTopWidth: 0
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#c1c1c1"
  },
  switch: {
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }]
  }
});
