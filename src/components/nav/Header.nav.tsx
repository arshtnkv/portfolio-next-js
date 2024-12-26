import Logo from '../../Icons/Logo';
import NavOption from './NavOption';
import navOptions from './navOptions';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const listener = () => {
        if (window.scrollY > 80) {
          setHandleShow(true);
        } else {
          setHandleShow(false);
        }
      };
      window.addEventListener('scroll', listener);

      return () => {
        window.removeEventListener('scroll', listener);
      };
    }
  }, []);

  return (
    <header
      className={`px-5 py-6 md:py-4 fixed bg-neutral-800 backdrop-filter backdrop-blur-xl w-full max-w-[100vw] top-0 z-20 ${
        handleShow ? 'shadow-2xl' : ''
      }`}
    >
      <div className="flex justify-between items-center max-w-[1350px] mx-auto">
        <Link
          activeClass="active"
          duration={500}
          href="intro"
          offset={-100}
          smooth={true}
          spy={true}
          title="arshtnkv"
          to="intro"
        >
          <Logo className="cursor-pointer" />
        </Link>
        <nav>
          <ol className="hidden space-x-8 md:flex">
            {navOptions.map((item, i) => (
              <NavOption item={item} key={i} number={i + 1} />
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
};

export { Header };
