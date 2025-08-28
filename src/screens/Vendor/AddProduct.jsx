import { useContext, useState } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-web';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { colors } from '../../constants/colors';
import { VendorContext } from '../../context/VendorContext';

export default function AddProduct() {
  const { publishProduct, loading } = useContext(VendorContext);
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!form.title.trim()) {
      Alert.alert('Validation Error', 'Product title is required.');
      return false;
    }
    if (!form.price || isNaN(form.price)) {
      Alert.alert('Validation Error', 'Please enter a valid price.');
      return false;
    }
    if (!form.image.trim()) {
      Alert.alert('Validation Error', 'Product image URL is required.');
      return false;
    }
    return true;
  };

  const onPublish = async () => {
    if (!validateForm()) return;

    try {
      await publishProduct({
        title: form.title.trim(),
        description: form.description.trim(),
        price: Number(form.price),
        image: form.image.trim()
      });

      Alert.alert('Success', 'Product published successfully!');
      setForm({ title: '', description: '', price: '', image: '' });
    } catch (error) {
      Alert.alert('Error', 'Failed to publish product. Please try again.');
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <FlatList contentContainerStyle={styles.container}/>
        <Input
          label="Title"
          value={form.title}
          onChangeText={(val) => handleChange('title', val)}
        />
        <Input
          label="Description"
          value={form.description}
          onChangeText={(val) => handleChange('description', val)}
          multiline
        />
        <Input
          label="Price"
          value={form.price}
          onChangeText={(val) => handleChange('price', val)}
          keyboardType="decimal-pad"
        />
        <Input
          label="Image URL"
          value={form.image}
          onChangeText={(val) => handleChange('image', val)}
          autoCapitalize="none"
        />
        <Button title={loading ? 'Publishing...' : 'Publish'} onPress={onPublish} disabled={loading} />
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center'
  }
});
