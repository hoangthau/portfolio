import { DiHtml5, DiCss3, DiReact } from 'react-icons/di';
import {
  SiJavascript,
  SiRedux,
  SiStyledComponents,
  SiGit,
  SiTypescript,
  SiAngular,
} from 'react-icons/si';

export const Skills = [
  {
    slug: 'react',
    Component: DiReact,
    color: '#0081B4',
    title: 'ReactJS',
    Description: () => (
      <>
        I love ReactJS and work on it for about 5 years. It's an awesome library which helps me
        build user interfaces and performant web apps.
      </>
    ),
  },
  {
    slug: 'redux',
    Component: SiRedux,
    color: '#6F1AB6',
    title: 'Redux',
    Description: () => (
      <>
        I've utilized Redux for all my projects to manage and debug global and complex state
        management.
      </>
    ),
  },
  {
    slug: 'javascript',
    Component: SiJavascript,
    color: '#FFC93C',
    title: 'JavaScript',
    Description: () => <>I've worked on JavaScript for many years, and it's my expertise.</>,
  },
  {
    slug: 'typescript',
    Component: SiTypescript,
    color: '#009EFF',
    title: 'TypeScript',
    Description: () => (
      <>
        I've worked on TypeScript for about 3 years. It's an awesome language which helps me build
        React application with quality.
      </>
    ),
  },
  {
    slug: 'styling',
    Component: SiStyledComponents,
    title: 'Styled-components',
    color: '#D989B5',
    Description: () => (
      <>CSS-in-JS is powerful and I adopt styled-components for most of my projects.</>
    ),
  },
  {
    slug: 'html',
    Component: DiHtml5,
    color: '#FF8B13',
    title: 'HTML5',
    Description: () => (
      <>
        I've used HTML5 for all my projects. I used some features like video, svg, semantic tags,
        web socket, local storage,...
      </>
    ),
  },
  {
    slug: 'css',
    Component: DiCss3,
    color: '#0081B4',
    title: 'CSS3',
    Description: () => (
      <>
        I love CSS3. I've used some great features like flexbox, animation, transitions, gradient,
        media queries ...
      </>
    ),
  },
  {
    slug: 'angular',
    Component: SiAngular,
    color: '#CD0404',
    title: 'Angular',
    Description: () => (
      <>
        I've used Angular v1 (old version) and Angular 10.x (new version) for some projects in
        Penetrace.
      </>
    ),
  },
  {
    slug: 'git',
    Component: SiGit,
    color: '#FF7000',
    title: 'Git',
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
