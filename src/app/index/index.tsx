import { MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/options";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories />
      <FlatList
        data={["1", "2", "3", "4"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Rocketseat"
            url="https://rocketseat.com.br"
            onDetails={() => console.log("clicou!")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>Rocketseat</Text>
            <Text style={styles.modalURL}>https://rocketseat.com.br</Text>
            <View style={styles.modalFooter}>
              <Option name="Abrir" icon="language" />
              <Option name="Excluir" icon="delete" variant="secondary" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
