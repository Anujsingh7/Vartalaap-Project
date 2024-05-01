import{ useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the page has scrolled more than 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once when component mounts

  // Function to scroll to the top of the page when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-10 right-10 bg-green-500 hover:bg-black-600 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none z-10"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default GoUpButton;
