import type { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	submit: (e: React.FormEvent<HTMLFormElement>) => void;
	className: string;
};

export const Form = ({ children, submit, className }: Props) => {
	return (
		<form className={className} onSubmit={submit}>
			{children}
		</form>
	);
};
