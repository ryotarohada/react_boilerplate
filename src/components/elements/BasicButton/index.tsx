import { Button, ButtonProps } from '@chakra-ui/button'

type Props = {} & ButtonProps

export const BasicButton = ({ variant = 'outline', ...rest }: Props) => {
  return (
    <Button variant={variant} {...rest}>
      click!
    </Button>
  )
}
