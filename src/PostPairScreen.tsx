import React, { useState } from 'react'
import { Button, View } from 'react-native'
import { useForm, Controller, FieldValues } from "react-hook-form";
import {Picker} from '@react-native-picker/picker';

const PostPairScreen = () => {
  const { setValue, control, handleSubmit, formState: { errors } } = useForm<FieldValues>();
  const onSubmit = (data: any) => console.log('submit data************ ', data);
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
              onValueChange={itemValue => setShoeBrand(itemValue)}
            >
            <Picker.Item label="Adidas" value="addidas" />
            <Picker.Item label="Puma" value="puma" />
            <Picker.Item label="Nike" value="nike" />
            <Picker.Item label="Under Armour" value="underArmour" />
            <Picker.Item label="Lotto" value="lotto" />
          </Picker>
        )}
        {...setValue("brand", shoeBrand)}
        name="brand" 
      />
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { value } }) => (
          <Picker
              selectedValue={shoeSize}
              onValueChange={(itemValue) =>
              setShoeSize(itemValue)
            }>
            <Picker.Item label="2" value="2" />
            <Picker.Item label="2.5" value="2.5" />
            <Picker.Item label="3" value="3.5" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="4.5" value="4.5" />
          </Picker>

        )}
        {...setValue("size", shoeSize)}
        name="size" 
      />
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { value }}) => (
          <Picker
            selectedValue={shoeCondition}
            onValueChange={(itemValue) =>
            setShoeCondition(itemValue)}
          >
            <Picker.Item label="poor" value="poor" />
            <Picker.Item label="fair" value="fair" />
            <Picker.Item label="good" value="good" />
            <Picker.Item label="new" value="new" />
          </Picker>
        )}
        {...setValue("condition", shoeCondition)}
        name="condition" 
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View >
  )
}

export default PostPairScreen
