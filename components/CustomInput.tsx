import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'


interface CustomInputProp {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }:CustomInputProp) => {
  return (
      <FormField
          control={control}
          name={name}
          render={({ field }) => (
              <div className='form-item'>
                  <FormLabel className='form-label'>
                      {label}
                  </FormLabel>
                  <div className='w-full flex flex-col'>
                      <FormControl>
                          <Input placeholder={placeholder} className='input-class' {...field} />
                      </FormControl>
                      <FormMessage className='form-message' />
                  </div>
              </div>
          )}
      />
  )
}

export default CustomInput
