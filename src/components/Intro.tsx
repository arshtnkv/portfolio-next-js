import data from '@/data';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';

export const Intro = () => {
  return (
    <motion.div
      animate={{ y: 0 }}
      className="space-y-5 max-w-7xl w-full mx-auto"
      id="intro"
      initial={{ y: 40 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-3xl text-neon font-fira">Привет! Я</p>
      <h1 className="text-5xl font-extrabold text-text md:text-8xl">
        Frontend developer
      </h1>
      <h2 className="text-4xl text-textDark md:text-6xl">
        Создаю потрясающие сайты!
      </h2>
      <p className="md:w-2/3 text-textDar">
        Специализируюсь на разработке{' '}
        <span className="text-neon">Frontend</span> приложений и активно
        развиваюсь в&nbsp;<span className="text-neon">Fullstack</span>
        &nbsp;с&nbsp;использованием Node.js и Express.js.
      </p>
      <p className="md:w-2/3 text-textDar">
        На этом сайте представлены примеры моих работ. Я делюсь только теми
        проектами, которые не подпадают под действие договоров NDA, сохраняя
        конфиденциальность и авторские права.
      </p>
      <div className="flex flex-col min-[480px]:flex-row gap-5 !mt-16">
        <Link
          activeClass="active"
          className="py-2 px-5 text-center hover:bg-neon hover:border-neon hover:backdrop-blur-lg hover:text-darkerBlue duration-100 border-neon border-2 text-neon rounded-lg"
          duration={500}
          href="contact"
          offset={-100}
          smooth={true}
          spy={true}
          to="contact"
        >
          Свяжитесь со мной!
        </Link>

        <Link
          activeClass="active"
          className="py-2 px-5 text-center text-darkerBlue bg-neon border-neon hover:bg-transparent duration-100 hover:text-neon border-2 rounded-lg"
          duration={500}
          href="contact"
          offset={-100}
          smooth={true}
          spy={true}
          to="work"
        >
          Посмотрите мои работы!
        </Link>
      </div>
    </motion.div>
  );
};
