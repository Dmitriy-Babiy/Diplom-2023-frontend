import Input from '../../ui/input/Input';
import Button from '../../ui/button/Button';

interface IConsultationFormProps {}

const inputs = [
    { placeholder: 'Name', type: 'text', label: 'Name:', name: 'name' },
    { placeholder: 'Phone', type: 'tel', label: 'Phone:', name: 'phone' },
    { placeholder: 'Email', type: 'email', label: 'Email:', name: 'email' },
];

export default function ConsultationForm({}: IConsultationFormProps) {
    return (
        <form className='shadow-md] relative -top-[50px] left-1/2 z-10 flex w-fit -translate-x-1/2'>
            {inputs.map((input) => (
                <Input
                    className='px-[20px] pb-[20px] text-lg text-black'
                    classNameLabel='bg-white px-[20px] pb-[10px] pt-[15px] text-lg text-black'
                    key={input.placeholder}
                    placeholder={input.placeholder}
                    type={input.type}
                    label={input.label}
                    name={input.name}
                />
            ))}
            <Button
                className='h-auto p-4 active:ring-0'
                sizeTitle={20}
                rounded={false}
                title='Consultation'
                onClick={() => console.log(123)}
            />
        </form>
    );
}
