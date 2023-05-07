import RegistrationForm from '../../components/registration-form/RegistrationForm';

interface IRegistrationPageProps {}

export default function RegistrationPage({}: IRegistrationPageProps) {
  return (
    <section className='flex flex-1 items-center justify-center'>
      <RegistrationForm />
    </section>
  );
}
