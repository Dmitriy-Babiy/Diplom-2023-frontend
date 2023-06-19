import React, { useState } from 'react';
import { IHeaderItemProps } from '../../../models/ITabs';
import clsx from 'clsx';

interface IHeaderTabsProps {
    children: any;
    id: string;
    activeTab: string;
}

export default function BodyTab(props: IHeaderTabsProps) {
    return (
        <div
            id={props.id}
            className={clsx({
                'hidden': props.id !== props.activeTab,
                'block': props.id === props.activeTab,
            })}
        >
            {props.children}
        </div>
    );
}
