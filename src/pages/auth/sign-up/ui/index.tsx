'use client';

import { SignUpBtn } from '@/features/auth/sign-up';
import { TextField } from '@mui/material';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Form } from '@/widgets/form';

export const SignUp: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [nameError, setLoginError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const [repeatPassError, setRepeatPassError] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');
	const [shakeFields, setShakeFields] = useState<boolean>(false);

	const passwordRegex = /^(?=.*[A-Z])(?=.*[_^%#])(?=.*[a-zA-Z]).{8,}$/;
	const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

	const router = useRouter();

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		if (!event.target.value.match(emailRegex)) {
			setEmailError('Email должен быть типа nick@squadseek.com');
		} else {
			setEmailError('');
		}
	};

	const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
		if (event.target.value.length < 3) {
			setLoginError('Логин должен содержать минимум 3 символа');
		} else {
			setLoginError('');
		}
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
		if (!event.target.value.match(passwordRegex)) {
			setPasswordError(
				'Пароль должен содержать минимум 8 символов с использованием латинской раскладки, минимум 1 заглавной буквы и минимум 1 символа типа _(^%#)'
			);
		} else {
			setPasswordError('');
		}
	};

	const handleConfirmPasswordChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setConfirmPassword(event.target.value);
		if (event.target.value !== password) {
			setRepeatPassError('Пароли не совпадают!');
		} else {
			setRepeatPassError('');
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (nameError || passwordError || emailError || repeatPassError) {
			setShakeFields(true);
			setTimeout(() => {
				setShakeFields(false);
			}, 1000);
			return;
		}
		// localStorage.clear();

		localStorage.setItem('email', email);
		localStorage.setItem('password', password);
		router.push('/');
	};
	return (
		<Form submit={handleSubmit} className='flex flex-col mx-auto items-center'>
			<h2 className='text-3xl font-bold mb-5'>Создать аккаунт</h2>
			<div className='mb-5'>
				<p className='font-semibold mb-2'>Почта</p>
				<TextField
					type='email'
					value={email}
					error={!!emailError}
					helperText={emailError}
					onChange={handleEmailChange}
					size='small'
					className={`w-60 mx-auto ${
						shakeFields && emailError ? 'animate-shake' : ''
					}`}
				/>
			</div>
			<div className='mb-5'>
				<p className='font-semibold mb-2'>Имя</p>
				<TextField
					type='text'
					size='small'
					value={name}
					onChange={handleLoginChange}
					error={!!nameError}
					helperText={nameError}
					className={`w-60 mx-auto ${
						shakeFields && nameError ? 'animate-shake' : ''
					}`}
				/>
			</div>
			<div className='mb-5'>
				<div className='flex justify-between'>
					<p className='font-semibold mb-2'>Пароль</p>
				</div>
				<TextField
					type='password'
					value={password}
					onChange={handlePasswordChange}
					margin='dense'
					error={!!passwordError}
					helperText={passwordError}
					size='small'
					className={`w-60 mx-auto ${
						shakeFields && passwordError ? 'animate-shake' : ''
					}`}
				/>
			</div>
			<div className='mb-7'>
				<div className='flex justify-between'>
					<p className='font-semibold mb-2'>Повторите пароль</p>
				</div>
				<TextField
					type='password'
					value={confirmPassword}
					onChange={handleConfirmPasswordChange}
					margin='dense'
					error={!!repeatPassError}
					helperText={repeatPassError}
					size='small'
					className={`w-60 mx-auto ${
						shakeFields && repeatPassError ? 'animate-shake' : ''
					}`}
				/>
			</div>
			<SignUpBtn buttonClass='mx-auto w-60 mb-5' />
		</Form>
	);
};
