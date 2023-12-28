import React from 'react'
import ReactDOM from 'react-dom/client'
import { CustomRouterProvider, CustomThemeProvider } from '@/components/providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CustomThemeProvider>
			<CustomRouterProvider />
		</CustomThemeProvider>
	</React.StrictMode>,
)
