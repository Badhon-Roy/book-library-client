import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const Banner = () => {
    return (
        <div className=''>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation ,Pagination, Autoplay]}
            navigation
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <div className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/50/2018/11/hero.jpg")' }}>
                    <div className=" bg-[rgba(0,0,0,0.4)] flex md:justify-start justify-center items-center h-full lg:px-32 md:px-16 px-8">
                        <div className='md:w-2/3'>
                            <h2 className="text-2xl md:text-4xl md:text-left text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">
                            Books Your Bridge to Success
                            </h2>
                            <p className="text-white md:text-left md:text-xl md:font-bold ">It encapsulates the idea that reading is a transformative journey, where knowledge serves as the bridge to achieving one is aspirations.</p>
                            <button className='btn btn-secondary btn-sm normal-case text-white mt-4'>Learn more</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://png.pngtree.com/background/20230522/original/pngtree-an-old-style-library-with-shelves-full-of-books-picture-image_2693166.jpg")' }}>
                    <div className="bg-[rgba(0,0,0,0.4)] flex md:justify-start justify-center items-center h-full lg:px-32 md:px-16 px-8">
                    <div className='md:w-2/3'>
                            <h2 className="text-2xl md:text-4xl md:text-left text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">
                            Books Your Bridge to Success
                            </h2>
                            <p className="text-white md:text-left md:text-xl md:font-bold ">It encapsulates the idea that reading is a transformative journey, where knowledge serves as the bridge to achieving one is aspirations.</p>
                            <button className='btn btn-secondary btn-sm normal-case text-white mt-4'>Learn more</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNc8ylAN1cVjpaUw8sW2-xVdi46jdigXJ5w&usqp=CAU")' }}>
                    <div className="bg-[rgba(0,0,0,0.4)] flex md:justify-start justify-center items-center h-full lg:px-32 md:px-16 px-8">
                    <div className='md:w-2/3'>
                            <h2 className="text-2xl md:text-4xl md:text-left text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">
                            Books Your Bridge to Success
                            </h2>
                            <p className="text-white md:text-left md:text-xl md:font-bold ">It encapsulates the idea that reading is a transformative journey, where knowledge serves as the bridge to achieving one is aspirations.</p>
                             <button className='btn btn-secondary btn-sm normal-case text-white mt-4'>Learn more</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3v87bXPeBGGfrPjNHz6G5yx1zVkAwllhsJg&usqp=CAU")' }}>
                    <div className="bg-[rgba(0,0,0,0.4)] flex md:justify-start justify-center items-center h-full lg:px-32 md:px-16 px-8">
                    <div className='md:w-2/3'>
                            <h2 className="text-2xl md:text-4xl md:text-left text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">
                            Books Your Bridge to Success
                            </h2>
                            <p className="text-white md:text-left md:text-xl md:font-bold ">It encapsulates the idea that reading is a transformative journey, where knowledge serves as the bridge to achieving one is aspirations.</p>
                             <button className='btn btn-secondary btn-sm normal-case text-white mt-4'>Learn more</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="md:h-[80vh] h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1FrFO9WoIqpZDPEYYthiT6u8gQCBtTmnk6qJzl-eacCeDQKXFJvEnlrM8e8Tv1l16XVo&usqp=CAU")' }}>
                    <div className="bg-[rgba(0,0,0,0.4)] flex md:justify-start justify-center items-center h-full lg:px-32 md:px-16 px-8">
                    <div className='md:w-2/3'>
                            <h2 className="text-2xl md:text-4xl md:text-left text-center lg:text-6xl font-bold mb-4 md:mb-8 text-white">
                            Books Your Bridge to Success
                            </h2>
                            <p className="text-white md:text-left md:text-xl md:font-bold ">It encapsulates the idea that reading is a transformative journey, where knowledge serves as the bridge to achieving one is aspirations.</p>
                             <button className='btn btn-secondary btn-sm normal-case text-white mt-4'>Learn more</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    );
};

export default Banner;