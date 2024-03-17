import { paths } from '@/shared/routing/paths';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Nav = () => {
	const router = useRouter();
	return (
		<nav>
			{router.pathname !== paths.auth && (
				<Link href={paths.auth}>
					<h1>Войти</h1>
				</Link>
			)}
		</nav>
	);
};
