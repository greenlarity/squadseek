import { Logo } from './logo';
import { Nav } from './nav';

export const Header = () => {
	return (
		<header className='relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900 mb-20'>
			<nav className='mx-auto max-w-7xl px-6 sm:px-6 lg:px-12'>
				<div className='relative flex items-center justify-between py-[2.125rem] border-y'>
					<Logo />
					<Nav />
				</div>
			</nav>
		</header>
	);
};
