import { Button } from '@/shared/ui/button';
import { TypingText } from './typing';

export const Hero = () => (
	<section className='mb-20'>
		<div className='flex flex-col'>
			<TypingText />
			<h2 className='mx-auto text-center mb-10 md:p-6'>
				Squadseek - это платформа, на которой ты можешь разместить свою
				кандидатуру или найти партнера по разработке.
			</h2>
			<Button className='mx-auto'>Найти коллегу</Button>
		</div>
	</section>
);
