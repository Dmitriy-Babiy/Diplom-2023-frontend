import clsx from 'clsx';

interface IMarkProps {
  text: string;
  type?: 'luxury' | 'standard' | 'economy';
}

export default function Mark(props: IMarkProps) {
  return (
    <div
      className={clsx('w-fit rounded px-2 py-1', {
        'markWrapper-color_luxury': props.type === 'luxury',
        'markWrapper-color_standard': props.type === 'standard',
        'markWrapper-color_economy': props.type === 'economy',
      })}
    >
      {props.text}
    </div>
  );
}
