import type Language from '@/interfaces/language';

import { Html5Icon } from '@/modules/home/components/icons/html5';
import { Css3Icon } from '@/modules/home/components/icons/css3';
import { SassIcon } from '@/modules/home/components/icons/sass';
import { BootstrapIcon } from '@/modules/home/components/icons/bootstrap';
import { GithubIcon } from '@/modules/home/components/icons/github';
import { ReactIcon } from '@/modules/home/components/icons/react';
import { NextJsIcon } from '@/modules/home/components/icons/next-js';

const frontend: Language[] = [
  {
    id: '1f133637-3251-446d-a7c0-65c472485fdd',
    title: 'HTML',
    iconType: Html5Icon,
  },
  {
    id: 'f6b884bd-ce44-4150-8554-05195eafbf21',
    title: 'CSS3',
    iconType: Css3Icon,
  },
  {
    id: '3807a6cd-bfe1-4bdc-967a-7a023025857c',
    title: 'SASS',
    iconType: SassIcon,
  },
  {
    id: '96a05da5-fa1f-41c7-9627-b695daaa7d8c',
    title: 'BOOTSTRAP',
    iconType: BootstrapIcon,
  },
  {
    id: '0f008344-ad46-424b-8545-da9c77446be5',
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    id: 'ed194507-bbf1-442d-a614-bd14c59eabdb',
    title: 'REACT',
    iconType: ReactIcon,
  },
  {
    id: '5fd6bb49-d021-403b-8445-a81cd671b144',
    title: 'NextJS',
    iconType: NextJsIcon,
  },
];

export default frontend;
