import { useState } from 'react';
import BookingTable from '../booking-table/BookingTable';
import ProfileUser from '../profile/profile-user/ProfileUser';
import BodyTab from './body-tab/BodyTab';
import BodyTabs from './body-tabs/BodyTabs';
import HeaderTabs from './header-tabs/HeaderTabs';

const headerTabs = [
    { id: '1', title: 'Bookings rooms' },
    { id: '2', title: 'Profile' },
    // { id: '3', title: 'Liked rooms' },
];

export default function Tabs() {
    const [activeTab, setActiveTab] = useState<string>('1');

    const handleActiveTab = (id: string) => {
        setActiveTab(id);
    };

    return (
        <div className='flex-1'>
            <HeaderTabs
                activeTab={activeTab}
                handleToggleTab={handleActiveTab}
                items={headerTabs}
            />
            <BodyTabs>
                <BodyTab id='1' activeTab={activeTab}>
                    <BookingTable />
                </BodyTab>
                <BodyTab id='2' activeTab={activeTab}>
                    <ProfileUser />
                </BodyTab>
            </BodyTabs>
        </div>
    );
}
