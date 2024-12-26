import { Title } from './Common/Title';
import data from '@/data';
import Image from 'next/image';
import React from 'react';

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="about">
      <Title num={1} title="Обо мне" />

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <div className="mt-10 text-xl text-textDark md:w-1/2 space-y-3 z-10">
          <p>
            Разрабатываю высокопроизводительные и масштабируемые веб-приложения
            на{' '}
            <span className="text-neon">
              React + Redux + TypeScript + Node.js
            </span>
            <br />
            Использую большинство библиотек и инструментов экосистемы React.
          </p>
          <p>{data.about}</p>
          <a
            className="flex items-center w-max !mt-16 px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current text-darkerBlue bg-neon border-neon hover:bg-transparent hover:text-neon"
            href="/docs/resume.pdf"
            rel="noreferrer"
            download="resume.pdf"
          >
            Скачать резюме
          </a>
        </div>

        <Image
          alt={data.name}
          className="object-cover relative mx-auto mt-20 border-2 rounded-full md:mt-0 md:ml-20 w-80 h-80 border-neon"
          height={300}
          src={data.image}
          width={300}
        />
      </div>
    </div>
  );
};
