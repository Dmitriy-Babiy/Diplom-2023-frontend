import React, { useState } from 'react';
import { IHeaderItemProps } from '../../../models/ITabs';
import clsx from 'clsx';

interface IHeaderTabsProps {
    children: any;
}

export default function BodyTabs(props: IHeaderTabsProps) {
    return <div className='BodyTabs rounded-md bg-background-color-components p-10 w-fit m-auto shadow-md'>{props.children}</div>;
}
