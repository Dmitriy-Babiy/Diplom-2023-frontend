import { LoginForm } from "../../components/forms";


interface IAuthorizationFormProps {}

export default function LoginPage({}: IAuthorizationFormProps) {
    return (
        <section className='flex flex-1 animate-opacity items-center justify-center pt-[96px]'>
            <LoginForm />
        </section>
    );
}
