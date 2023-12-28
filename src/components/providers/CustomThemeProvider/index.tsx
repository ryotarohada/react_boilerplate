import { theme } from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'

type CustomThemeProviderProps = {
	children: React.ReactNode
}

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
