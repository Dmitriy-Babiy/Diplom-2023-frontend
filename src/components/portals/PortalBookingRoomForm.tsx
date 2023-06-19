import { PortalWithState } from 'react-portal';
import icons from '../../assets/icons/icons';
import ImageEditor from '../image-editor/ImageEditor';
import Button from '../ui/button/Button';

export default function PortalBookingRoomForm() {
    return (
        <PortalWithState closeOnEsc>
            {({ openPortal, closePortal, isOpen, portal }) => (
                <>
                    <Button
                        btnType='default'
                        className='absolute right-0 top-0 active:scale-90'
                        onClick={openPortal}
                        icon={icons.settings}
                        hint='Update avatar'
                    />
                    {portal(
                        <div className='absolute left-0 top-0 z-20 flex h-screen w-screen animate-opacity flex-col items-center justify-center bg-black bg-opacity-50 backdrop-blur-md'>
                            <div className='flex flex-col rounded-md bg-background-color-components p-5'>
                                <ImageEditor />
                                <Button
                                    className='mt-3'
                                    btnType='close'
                                    title='Close'
                                    size='medium'
                                    rounded
                                    onClick={closePortal}
                                />
                            </div>
                        </div>
                    )}
                </>
            )}
        </PortalWithState>
    );
}
