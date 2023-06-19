import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateAvatar } from '../../redux/slice/SessionSlice';
import { toastOptions } from '../../utils/toast';
import Button from '../ui/button/Button';
import Input from '../ui/input/Input';

const ImageEditor = () => {
    const dispatch = useAppDispatch();

    const avatar = useAppSelector((state) => state.session.user?.avatar);

    const editorRef = useRef<AvatarEditor | null>(null);
    const [imageInEditor, setImageInEditor] = useState<any>();
    const [scale, setScale] = useState<number>(1);

    const updateAvatarToServer = () => {
        if (editorRef.current) {
            const canvas = editorRef.current.getImageScaledToCanvas();
            const imageURL = canvas.toDataURL();
            uploadImageToServer(imageURL);
        }
    };

    const changeImageInEditor = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImageInEditor(e.target.files[0]);
        }
    };

    const uploadImageToServer = (imageData: string) => {
        dispatch(updateAvatar(imageData));
        const notify = () => toast.success('Avatar updated', toastOptions);
        notify();
    };

    const changeScale = (e: React.ChangeEvent<HTMLInputElement>) => {
        setScale(Number(e.target.value));
    };

    return (
        <div className='flex max-w-[350px] flex-col items-center justify-center'>
            <AvatarEditor
                ref={editorRef}
                image={imageInEditor}
                width={250}
                height={250}
                border={50}
                color={[0, 0, 0, 0.5]}
                scale={scale}
                rotate={0}
                borderRadius={1000}
                className='rounded-md bg-white-70'
            />
            <Input
                id='file'
                type='file'
                htmlFor='file'
                label='Upload File'
                name='editorImage'
                accept='image/png, image/gif, image/jpeg'
                classNameWrapper='mt-3'
                classNameLabel='justify-center cursor-pointer text-blue-400 underline-offset-4 hover:underline'
                className='hidden '
                onChange={changeImageInEditor}
            />
            <Input
                classNameWrapper='w-full mt-3'
                label={`Scale : ${Math.round((scale - 1) * 100)}%`}
                name='sizeImage'
                type='range'
                step={0.01}
                min={1}
                max={2}
                value={scale}
                onChange={changeScale}
            />
            <Button
                className='mt-3 w-full'
                title='Update avatar'
                size='medium'
                rounded
                onClick={updateAvatarToServer}
                disabled={imageInEditor == undefined ? true : false}
                btnType={imageInEditor == undefined ? 'disabled' : 'active'}
            />
        </div>
    );
};

export default ImageEditor;
