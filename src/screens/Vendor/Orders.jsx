import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';


export default function Orders() {
return (
<View style={styles.container}>
<Text style={{ color: colors.muted }}>Orders screen placeholder</Text>
</View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center' }
});