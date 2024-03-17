import { Button } from '@/shared/ui/button';

interface LoginProps {
	buttonClass: string;
}

export const Login: React.FC<LoginProps> = ({ buttonClass }) => {
	return <Button className={buttonClass}>Войти</Button>;
};
