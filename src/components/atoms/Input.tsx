import { Input as AntInput, InputProps as AntInputProps } from 'antd'

export const Input = (props: AntInputProps) => {
  const { size, ...restProps } = props
  const validSize = typeof size === 'string' ? size : undefined

  return <AntInput size={validSize} {...restProps} />
}
