type StepProps = {
	title: string;
	descr: string;
};

export const StepItem = ({ title, descr }: StepProps) => (
	<div className='flex flex-row items-center bg-[#3c3c3c] rounded-xl p-5 w-80 h-40'>
		<div className='flex flex-col items-center text-center'>
			<h2 className='text-3xl mb-4 font-semibold text-white text-center'>
				{title}
			</h2>
			<p className='text-wrap text-center text-white'>{descr}</p>
		</div>
	</div>
);
