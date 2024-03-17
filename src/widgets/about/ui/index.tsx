import { StepItem } from './items';

export const About = () => {
	return (
		<section className='bg-[#f6f6f6]'>
			<div className='flex mx-auto flex-col items-center'>
				<div>
					<h2 className=' text-3xl lg:text-4xl text-center mt-12 mb-12 font-light'>
						Как это работает?
					</h2>
				</div>
				<div className='flex flex-col items-center gap-10 lg:flex-row'>
					<StepItem
						title='Найди специалиста'
						descr='Отфильтруй в поиске по нужному стэку технологий'
					/>
					<StepItem
						title='Подай заявку'
						descr='Специалист её получит и рассмотрит'
					/>
					<StepItem
						title='Начните проект'
						descr='Здесь мы не вмешиваемся. Удачи в новом проекте!'
					/>
				</div>
			</div>
		</section>
	);
};
