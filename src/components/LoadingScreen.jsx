import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const LoadingScreen = () => {


  const renderCarouselItems = () => {
    const numItems = 5;
    const items = [];

    for (let i = 0; i < numItems; i++) {
      items.push(
        <div key={i} className="bg-black w-24 h-24 mx-4 rounded" />
      );
    }

    return items;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-900">
        <AliceCarousel
          autoPlay
          autoPlayInterval={1000}
          buttonsDisabled
          dotsDisabled
          infinite
          mouseTracking
          items={renderCarouselItems()}
        />
    </div>
  );
};

export default LoadingScreen;