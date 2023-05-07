import clsx from 'clsx';
import { HTMLProps } from 'react';

interface IInputProps {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  className?: HTMLProps<HTMLElement>['className'];
  autoFocus?: boolean;
}
export default function Input(props: IInputProps) {
  return (
    <div className='flex flex-col'>
      {props.label && (
        <label className='bg-white px-[20px] pb-[10px] pt-[15px] text-lg text-black'>
          {props.label}
        </label>
      )}
      <input
        autoFocus={props.autoFocus}
        autoComplete='off'
        className={
          props.className
            ? props.className
            : 'px-[20px] pb-[20px] text-lg text-black'
        }
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
