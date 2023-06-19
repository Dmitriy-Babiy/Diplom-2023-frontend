import clsx from 'clsx';

interface IMarkProps {
  text: string | number;
  type?: 'discount';
}

export default function Mark(props: IMarkProps) {
  return (
    <div
      className={clsx('w-fit rounded px-2 py-[2px] font-light text-sm mt-1', {
        'bg-[#66a581]': props.type === 'discount',
      })}
    >
      {props.text}
    </div>
  );
}
