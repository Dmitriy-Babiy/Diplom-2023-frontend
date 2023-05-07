import clsx from 'clsx';
import { HTMLProps } from 'react';

interface IButtonProps {
  onClick: () => void;
  title: string;
  icon?: any;
  size?: 'large' | 'medium' | 'small';
  sizeTitle?: number;
  rounded?: boolean;
  className?: HTMLProps<HTMLElement>['className'];
}

export default function Button({
  onClick,
  title,
  icon,
  size = 'large',
  sizeTitle = 16,
  rounded = true,
  className,
}: IButtonProps) {
  return (
    <button
      style={{ fontSize: sizeTitle }}
      className={clsx(
        'flex cursor-pointer items-center justify-center border-none bg-btn-color hover:bg-btn-color-hover',
        className,
        {
          'px-7 py-5': size === 'large',
          'px-7 py-4': size === 'medium',
          'px-7 py-2': size === 'small',
          rounded: rounded,
        }
      )}
      onClick={onClick}
    >
      {icon ? <img className='pr-3' src={icon} alt='icon' /> : ''}
      <span>{title}</span>
    </button>
  );
}
