import { Title } from '../Common/Title';
import { Project } from './Project';
import data from '@/data';

export const Projects = () => {
  return (
    <div id="work">
      <Title num={2} title="Над чем я работал" />
      <div className="flex flex-col space-y-10 mt-10">
        {data.projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </div>
  );
};
