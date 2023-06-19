type IVideoProps = {
  title: string;
  video?: string;
};

export default function Video({ title, video }: IVideoProps) {
  return (
    <section className='relative mt-24'>
      <span className='z-10 absolute text-8xl tracking-[30px] h-full w-full flex items-center justify-center bg-black-80 select-none'>{title}</span>
      <div className='w-full h-[500px] overflow-hidden'>
        <video
          className='relative w-full top-1/2 -translate-y-1/2'
          autoPlay
          muted
          loop
          preload='auto'
          src='https://thehoxton.com/wp-content/uploads/sites/5/2020/08/Hoxton_Hotels_Homepage_Final.mp4'
        >
          {/* <source type='video/mp4' src={video} />
          <source type='video/webm' src={video} /> */}
        </video>
      </div>
    </section>
  );
}
