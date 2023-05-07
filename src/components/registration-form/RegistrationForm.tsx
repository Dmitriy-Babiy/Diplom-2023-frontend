import { useNavigate } from 'react-router-dom';
import PATHNAMES from '../../consts/pathnames';
import Input from '../ui/input/Input';
import Button from '../ui/button/Button';

interface IRegistrationFormProps {}

const inputs = [
  { placegolder: 'Email', type: 'email', name: 'login', autoFocus: true },
  { placegolder: 'Password', type: 'password', name: 'password' },
  { placegolder: 'Сonfirm password', type: 'password', name: 'password' },
];

export default function RegistrationForm({}: IRegistrationFormProps) {
  const navigate = useNavigate();
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className='flex justify-center shadow-2xl'
    >
      <div className='flex flex-col gap-7 rounded-lg bg-background-color-components p-16'>
        <span className='text-center text-5xl font-semibold'>
          Create account
        </span>
        <span className='whitespace-pre-wrap text-center'>
          {'Welcome! Enter your details and\nstart booking right now.'}
        </span>
        {inputs.map((input) => (
          <Input
            className='w-full rounded border-[1px] border-solid border-green-color bg-transparent px-5 py-3 text-sm text-white hover:ring-2 hover:ring-green-color focus:ring-2 focus:ring-green-color'
            placeholder={input.placegolder}
            type={input.type}
            name={input.name}
            autoFocus={input.autoFocus}
          />
        ))}
        <Button
          className='mt-4 text-xl tracking-wide'
          size='small'
          title='Create account'
          onClick={() => {}}
        />
        <p className='text-center'>
          {'Do you have an account? '}
          <a
            onClick={() => navigate(PATHNAMES.authorization)}
            className='cursor-pointer text-blue-400 underline-offset-4 hover:underline'
          >
            Go back
          </a>
          .
        </p>
      </div>
    </form>
  );
}
