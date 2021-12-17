import React, { useEffect, useState } from 'react'
import { Button, View } from 'react-native'
import { useForm, Controller } from "react-hook-form";
import {Picker} from '@react-native-picker/picker';

type ShoePostInputs = {
  brand: string;
  size: string;
  condition: string;
  sport: string;
}

const PostPairScreen = () => {
  const { setValue, control, handleSubmit, formState: { errors } } = useForm<ShoePostInputs>({ mode: 'onChange' });
  const [shoeBrand, setShoeBrand] = useState<string | undefined>(undefined)
  const [shoeSize, setShoeSize] = useState<string | undefined>(undefined)
  const [shoeCondition, setShoeCondition] = useState<string | undefined>(undefined)

  const handleShoePostSubmit = async (data: any) => {
    console.log('data inside shoe post', data)
    try {
      const response = await fetch(
        'http://localhost:3000/ping'
      );
      const json = await response.json();
      console.log('the json', json)
      return json;
    } catch (error) {
      console.error(error);
    }
  }
  
  const onSubmit = async (data: any) => {
    try {
      await handleShoePostSubmit(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (shoeBrand) {
      setValue("brand", shoeBrand)
    }
    if (shoeSize) {
      setValue("size", shoeSize)
    }
    if (shoeCondition) {
      setValue("condition", shoeCondition)
    }
    setValue("sport", "soccer")
  }, [shoeBrand, shoeSize, shoeCondition])

  return (
    <View>
      <Controller
        control={control}
        render={() => (
          <Picker
              selectedValue={shoeBrand}
              onValueChange={itemValue => setShoeBrand(itemValue)}
            >
            <Picker.Item label="Adidas" value="adidas" />
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
        render={() => (
          <Picker
              selectedValue={shoeSize}
              onValueChange={(itemValue) =>
              setShoeSize(itemValue)
            }>
            <Picker.Item label="2" value="2" />
            <Picker.Item label="2.5" value="2.5" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="3.5" value="3.5" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="4.5" value="4.5" />
          </Picker>

        )}
        name="size" 
      />
      <Controller
        control={control}
        render={() => (
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
        name="condition" 
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View >
  )
}

export default PostPairScreen
