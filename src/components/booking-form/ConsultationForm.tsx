import Input from '../ui/input/Input';
import Button from '../ui/button/Button';

interface IBookingFormProps {}

const inputs = [
  { placeholder: 'Name', type: 'text', label: 'Name:', name: 'name' },
  { placeholder: 'Phone', type: 'tel', label: 'Phone:', name: 'phone' },
  { placeholder: 'Email', type: 'email', label: 'Email:', name: 'email' },
];

export default function BookingForm({}: IBookingFormProps) {
  return (
    <form className='relative left-1/2 z-10 -mt-[50px] flex w-fit -translate-x-1/2 shadow-[0px_4px_4px_2px_rgba(0,0,0,0.1)]'>
      {inputs.map((input) => (
        <Input
          placeholder={input.placeholder}
          type={input.type}
          label={input.label}
          name={input.name}
        />
      ))}
      <Button
        sizeTitle={20}
        rounded={false}
        title='Consultation'
        onClick={() => console.log(123)}
      />
    </form>
  );
}
