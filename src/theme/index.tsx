import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { CustomColorOptions } from '@/theme/colors'
import { CustomComponentOptions } from '@/theme/components'
import { CustomStyleOptions } from '@/theme/styles'

type CustomThemeProviderProps = {
	children: React.ReactNode
}

// https://chakra-ui.com/docs/styled-system/customize-theme
export const theme = extendTheme({
	colors: CustomColorOptions,
	components: CustomComponentOptions,
	styles: CustomStyleOptions,
})

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
