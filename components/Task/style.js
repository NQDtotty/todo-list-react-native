import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        marginBottom: 15,
        paddingVertical: 14,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        backgroundColor: "#53d6f2",
        alignItems: "center",
        justifyContent: "center",
    },
    num: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    content: {
        width: "80%",
        fontSize: 16
    },
});

export default styles;