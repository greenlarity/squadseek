import { ThemeProvider } from '@/features/theme/ThemeProvider';
import { Header } from '@/widgets/header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { PropsWithChildren } from 'react';

export const BaseLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange
			>
				<AppRouterCacheProvider>
					<Header />
					<main>{children}</main>
				</AppRouterCacheProvider>
			</ThemeProvider>
		</>
	);
};
