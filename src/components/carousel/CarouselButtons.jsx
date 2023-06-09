import PropTypes from 'prop-types';
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

export const CarouselButtons = ({ scrollLeft, scrollRight }) => {
  return (
    <div>
      <div className="hidden md:flex absolute inset-y-0 left-0 items-center bg-black bg-opacity-30">
        <button className="text-white hover:scale-125" onClick={scrollLeft}>
          <IconChevronLeft size={40} />
        </button>
      </div>

      <div className="hidden md:flex absolute inset-y-0 right-0 items-center bg-black bg-opacity-30">
        <button className="text-white hover:scale-125" onClick={scrollRight}>
          <IconChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

CarouselButtons.propTypes = {
    scrollLeft: PropTypes.func.isRequired,
    scrollRight: PropTypes.func.isRequired,
  };