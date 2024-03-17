'use client';

import { Login } from '@/features/auth/sign-in';
import { paths } from '@/shared/routing';
import { TextField } from '@mui/material';
import Link from 'next/link';

import { useState } from 'react';

export const AuthPage: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');
	const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
	const [shakeFields, setShakeFields] = useState<boolean>(false);

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
		return (
			<form action=''>
				<h2>Hello</h2>
				{/* <Logo /> */}
			</form>
		);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (emailError) {
			setShakeFields(true);
			setTimeout(() => {
				setShakeFields(false);
			}, 1000);
			return;
		}
	};

	return (
		<form className='flex flex-col mx-auto items-center'>
			<h2 className='text-3xl font-bold mb-5'>Войти в аккаунт</h2>
			<div className='mb-5'>
				<p className='font-semibold mb-2'>Почта</p>
				<TextField type='email' size='small' className='w-60 mx-auto' />
			</div>
			<div className='mb-10'>
				<div className='flex justify-between'>
					<p className='font-semibold mb-2'>Пароль</p>
					<Link href='/' className='text-[#5e61f8] font-semibold'>
						Забыли пароль?
					</Link>
				</div>
				<TextField type='password' size='small' className='w-60 mx-auto' />
			</div>
			<Login buttonClass='mx-auto w-60 mb-5' />
			<Link href={paths.signup} className='font-medium text-gray-500'>
				Нет аккаунта?
			</Link>
		</form>
	);
};
