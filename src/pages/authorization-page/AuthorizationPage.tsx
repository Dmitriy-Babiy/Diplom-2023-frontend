import AuthorizationForm from '../../components/authorization-form/AuthorizationForm';

interface IAuthorizationFormProps {}

export default function AuthorizationPage({}: IAuthorizationFormProps) {
  return (
    <section className='flex flex-1 items-center justify-center'>
      <AuthorizationForm />
    </section>
  );
}
