import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { useForm, Controller, FieldValues } from "react-hook-form";
import {Picker} from '@react-native-picker/picker';

const PostPairScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>();
  const onSubmit = (data: any) => console.log(data);
  const [shoeBrand, setShoeBrand] = useState()
  const [shoeSize, setShoeSize] = useState()
  const [shoeCondition, setShoeCondition] = useState()

  return (
    <View>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={() => (
          <Picker
              selectedValue={shoeBrand}
              onValueChange={(itemValue, itemIndex) =>
              setShoeBrand(itemValue)
            }>
            <Picker.Item label="Addidas" value="addidas" />
            <Picker.Item label="Puma" value="puma" />
            <Picker.Item label="Nike" value="nike" />
            <Picker.Item label="Under Armour" value="underArmour" />
            <Picker.Item label="Lotto" value="lotto" />
          </Picker>

        )}
        name="brand" 
      />
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={() => (
          <Picker
              selectedValue={shoeSize}
              onValueChange={(itemValue, itemIndex) =>
              setShoeSize(itemValue)
            }>
            <Picker.Item label="2" value="2" />
            <Picker.Item label="2.5" value="2.5" />
            <Picker.Item label="3" value="3.5" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="4.5" value="4.5" />
          </Picker>

        )}
        name="size" 
      />
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={() => (
          <Picker
              selectedValue={shoeCondition}
              onValueChange={(itemValue, itemIndex) =>
              setShoeCondition(itemValue)
            }>
            <Picker.Item label="poor" value="poor" />
            <Picker.Item label="fair" value="fair" />
            <Picker.Item label="good" value="good" />
            <Picker.Item label="new" value="new" />
          </Picker>

        )}
        name="condition" 
      />
      {console.log('shoeBrand', shoeBrand)}
      {console.log('error ', errors)}
      {/* {errors.brand && <Text>brand is required.</Text>} */}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View >
  )
}

export default PostPairScreen
