import clsx from 'clsx';

interface IInputProps {
    className?: string | undefined;
    placeholder?: string;
    autoFocus?: boolean;
    onChange?: (value: any) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
    accept?: string;
    value?: any;
    name: string;
    type: string;
    step?: number;
    min?: number;
    max?: number;
    id?: string;

    label?: string;
    htmlFor?: string;
    classNameLabel?: string | undefined;
    classNameWrapper?: string | undefined;
    errorMessage?: string | undefined;
}
export default function Input(props: IInputProps) {
    return (
        <div className={clsx(props.classNameWrapper, 'relative flex flex-col')}>
            {props.label && (
                <label htmlFor={props.htmlFor} className={props.classNameLabel}>
                    {props.label}
                </label>
            )}
            <input
                className={props.className}
                placeholder={props.placeholder}
                autoFocus={props.autoFocus}
                onChange={props.onChange}
                onBlur={props.onBlur}
                accept={props.accept}
                value={props.value}
                name={props.name}
                type={props.type}
                step={props.step}
                min={props.min}
                max={props.max}
                autoComplete='off'
                id={props.id}
            />
            <span className='absolute -translate-y-[135%] font-mono text-xs text-error'>
                {props.errorMessage}
            </span>
        </div>
    );
}
