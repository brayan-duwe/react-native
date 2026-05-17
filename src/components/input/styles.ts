import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    backgroundColor: colors.gray[900],
    borderRadius: 32,
    borderWidth: 1,
    borderColor: colors.gray[800],
    padding: 16,
    color: colors.gray[100],
    fontSize: 16,
  },
});
