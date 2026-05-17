import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  titleLocation: {
    flex: 1,
  },
  title: {
    color: colors.gray[200],
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  label: {
    color: colors.gray[400],
    fontSize: 14,
    paddingHorizontal: 24,
  },
  form: {
    padding: 20,
    gap: 12,
  },
});
