import type Language from '@/interfaces/language';
import { JavascriptIcon } from '@/modules/home/components/icons/javascript';
import { TypescriptIcon } from '@/modules/home/components/icons/typescript';
import { PythonIcon } from '@/modules/home/components/icons/python';
import { JavaIcon } from '@/modules/home/components/icons/java';
import { KotlinIcon } from '@/modules/home/components/icons/kotlin';
import { PhpIcon } from '@/modules/home/components/icons/php';

const languages: Language[] = [
  {
    id: '02590476-c72c-4f15-802d-790f66ae930e',
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    id: 'c91421a0-51e6-4b36-917b-110848bb6964',
    title: 'Typescript',
    iconType: TypescriptIcon,
  },
  {
    id: 'fda479a1-b735-451c-a2c0-ba33b1bc63c8',
    title: 'PHP',
    iconType: PhpIcon,
  },
  {
    id: 'f39ae59b-bfff-4039-825e-0f0ce6738bb2',
    title: 'PYTHON',
    iconType: PythonIcon,
  },
  {
    id: 'ac02da23-61dd-4775-b894-16fc5e1bae6a',
    title: 'JAVA',
    iconType: JavaIcon,
  },
  {
    id: '73804338-90fe-4ec0-aefb-907aa815724d',
    title: 'KOTLIN',
    iconType: KotlinIcon,
  },
];

export default languages;
