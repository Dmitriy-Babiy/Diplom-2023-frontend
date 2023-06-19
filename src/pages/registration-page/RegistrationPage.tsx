import { RegistrationForm } from "../../components/forms";


interface IRegistrationPageProps {}

export default function RegistrationPage({}: IRegistrationPageProps) {
    return (
        <section className='flex flex-1 animate-opacity items-center justify-center pt-[96px]'>
            <RegistrationForm />
        </section>
    );
}
