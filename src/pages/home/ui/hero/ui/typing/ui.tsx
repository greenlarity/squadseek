import { ReactTyped } from 'react-typed';

export const TypingText = () => {
	return (
		<div className='flex gap-1 text-3xl font-medium items-center justify-center lg:text-5xl mb-10'>
			<h1>Найди</h1>
			<ReactTyped
				strings={['дизайнера', 'разработчика', 'тестировщика']}
				typeSpeed={80}
				backSpeed={60}
				loop
			/>
		</div>
	);
};
