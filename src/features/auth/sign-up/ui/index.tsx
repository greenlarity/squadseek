import { Button } from '@/shared/ui/button';

interface SignUpProps {
	buttonClass: string;
}

export const SignUpBtn: React.FC<SignUpProps> = ({ buttonClass }) => {
	return <Button className={buttonClass}>Зарегистрироваться</Button>;
};
