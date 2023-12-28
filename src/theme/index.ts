import { extendTheme } from '@chakra-ui/react'
import { customColorOptions } from '@/theme/colors'
import { customComponentOptions } from '@/theme/components'
import { customStyleOptions } from '@/theme/styles'
import { customConfigOptions } from '@/theme/configs'

// https://chakra-ui.com/docs/styled-system/customize-theme
export const theme = extendTheme({
	colors: customColorOptions,
	components: customComponentOptions,
	styles: customStyleOptions,
	config: customConfigOptions,
})
