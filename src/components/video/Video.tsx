type IVideoProps = {
  title: string;
  video: string;
};

export default function Video({ title, video }: IVideoProps) {
  return (
    <section className='videoWrapper'>
      <span className='videoWrapper__title'>{title}</span>
      <div className='videoWrapper__video'>
        <video
          className='videoWrapper__content'
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
