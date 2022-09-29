import { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './custom-input.styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  //   children: string
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputProps> = ({
  //   children,
  hasError,
  ...rest
}) => {
  return (
    <CustomInputContainer hasError={hasError} {...rest}>
      {/* {children} */}
    </CustomInputContainer>
  )
}

export default CustomInput
