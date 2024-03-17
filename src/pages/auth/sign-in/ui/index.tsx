'use client';

import { Login } from '@/features/auth/sign-in';
import { paths } from '@/shared/routing';
import { TextField } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { Form } from '@/widgets/form';

export const AuthPage: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');
	const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
	// const [shakeFields, setShakeFields] = useState<boolean>(false);
	const router = useRouter();

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		if (!event.target.value.match(emailRegex)) {
			setEmailError('Email должен быть типа nick@squadseek.com');
		} else {
			setEmailError('');
		}
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let storageEmail = localStorage.getItem('email');
		let storagePassword = localStorage.getItem('password');
		if (email === storageEmail && password === storagePassword) {
			console.log('Authorized!');
			router.push('/');
		}
	};

	return (
		<Form submit={handleSubmit} className='flex flex-col mx-auto items-center'>
			<h2 className='text-3xl font-bold mb-5'>Войти в аккаунт</h2>
			<div className='mb-5'>
				<p className='font-semibold mb-2'>Почта</p>
				<TextField
					type='email'
					size='small'
					value={email}
					error={!!emailError}
					helperText={emailError}
					onChange={handleEmailChange}
					className='w-60 mx-auto'
				/>
			</div>
			<div className='mb-10'>
				<div className='flex justify-between'>
					<p className='font-semibold mb-2'>Пароль</p>
					<Link href='/' className='text-[#5e61f8] font-semibold'>
						Забыли пароль?
					</Link>
				</div>
				<TextField
					type='password'
					value={password}
					onChange={handlePasswordChange}
					margin='dense'
					size='small'
					className='w-60 mx-auto'
				/>
			</div>
			<Login buttonClass='mx-auto w-60 mb-5' />
			<Link href={paths.signup} className='font-medium text-gray-500'>
				Нет аккаунта?
			</Link>
		</Form>
	);
};
