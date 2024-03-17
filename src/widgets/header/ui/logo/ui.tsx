import { paths } from '@/shared/routing/paths';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../../public/logo.svg';

export const Logo = () => (
	<Link href={paths.home} className='flex items-center gap-2'>
		<Image src={logo} alt='Squadseek' height={150} width={150} />
	</Link>
);
