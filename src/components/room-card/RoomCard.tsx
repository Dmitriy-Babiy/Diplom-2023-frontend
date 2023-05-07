import Button from '../ui/button/Button';
import Mark from '../ui/mark/Mark';

export interface roomCardProps {
  title: string;
  price: number;
  image: string;
  type: 'luxury' | 'standard' | 'economy';
}
export default function RoomCard({ title, price, image, type }: roomCardProps) {
  return (
    <div className='flex min-h-[350px] w-[900px] overflow-hidden rounded-md bg-background-color-components shadow-md'>
      <div>
        <img className='h-full max-w-[350px] object-cover' src={image} alt='' />
      </div>
      <div className='flex w-full flex-col justify-between p-5'>
        <div className='flex items-center justify-between'>
          <div>
            <span className='text-2xl font-medium'>{title}</span>
            <Mark text={type} type={type} />
          </div>

          <div className='flex flex-col items-end'>
            <span className='text-2xl leading-6 font-medium text-btn-color'>
              ${price}
            </span>
            <span className='text-xs leading-4 text-btn-color'>one night</span>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, earum
          quod libero rem dolorum deleniti amet quo ut quaerat provident.
        </p>

        <div className='flex flex-row-reverse'>
          <Button
            size='medium'
            onClick={() => console.log(123)}
            title='More detailed'
          />
        </div>
      </div>
    </div>
  );
}
