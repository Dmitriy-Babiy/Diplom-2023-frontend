import { IHeaderItemProps } from '../../../models/ITabs';
import clsx from 'clsx';

interface IHeaderTabsProps {
    items: IHeaderItemProps[];
    activeTab: string;
    handleToggleTab: (id: string) => void;
}

export default function HeaderTabs(props: IHeaderTabsProps) {
    return (
        <div className='py-10 text-center'>
            <ul className='inline-flex'>
                {props.items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => props.handleToggleTab(item.id)}
                        className={clsx(
                            'relative mx-3 flex cursor-pointer items-center rounded p-2 text-sm transition-colors active:text-project-green-200',
                            {
                                'font-semibold text-project-green-200 after:absolute after:-bottom-1.5 after:right-1/2 after:w-full after:translate-x-1/2 after:translate-y-1/2 after:rounded-full after:border-b-2 after:border-solid after:border-green-color after:transition-all':
                                    item.id === props.activeTab,
                            }
                        )}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
