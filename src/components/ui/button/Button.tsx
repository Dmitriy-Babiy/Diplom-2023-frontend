import clsx from 'clsx';
import { ReactNode } from 'react';

export interface IButtonProps {
    type?: 'button' | 'reset' | 'submit';
    size?: 'large' | 'medium' | 'small';
    btnType?: 'default' | 'black' | 'close' | 'disabled' | 'active';
    className?: string | undefined;
    onClick?: (event?: any) => void;
    sizeTitle?: number;
    iconSize?: number | undefined;
    swapIcon?: boolean;
    disabled?: boolean;
    outline?: boolean;
    rounded?: boolean;
    title?: string;
    icon?: any;
    hint?: string;
    children?: ReactNode;
}

export default function Button({
    btnType = 'active',
    disabled,
    rounded,
    sizeTitle = 16,
    iconSize,
    className,
    onClick,
    title,
    icon,
    size,
    type,
    swapIcon,
    outline,
    hint,
    children,
}: IButtonProps) {
    return (
        <button
            style={{ fontSize: sizeTitle }}
            type={type}
            title={hint}
            disabled={disabled}
            className={clsx('btn', className, {
                'btn-active': btnType == 'active' && !disabled,
                'btn-close': btnType == 'close' && !disabled,
                'btn-black': btnType == 'black' && !disabled,
                'btn-disabled': btnType == 'disabled',
                'gap-2': title,
                'flex-row-reverse': swapIcon,
                'h-8 px-5': size === 'small',
                'h-10 px-6': size === 'medium',
                'h-12 px-7': size === 'large',
                'rounded-md': rounded,
                'border border-solid bg-transparent hover:bg-transparent active:bg-transparent':
                    outline && !disabled,
            })}
            onClick={onClick}
        >
            {icon ? (
                <img style={{ width: iconSize, height: iconSize }} src={icon} alt='icon' />
            ) : null}
            <span>{title}</span>
            {children}
        </button>
    );
}
