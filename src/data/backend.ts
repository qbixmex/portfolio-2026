import type Language from '@/interfaces/language';

import { NodeIcon } from '@/modules/home/components/icons/node';
import { ExpressIcon } from '@/modules/home/components/icons/express';
import { NestIcon } from '@/modules/home/components/icons/nest';
import { DockerIcon } from '@/modules/home/components/icons/docker';
import { MysqlIcon } from '@/modules/home/components/icons/mysql';
import { PostgresIcon } from '@/modules/home/components/icons/postgres';
import { MongoIcon } from '@/modules/home/components/icons/mongo';

const frontend: Language[] = [
  {
    id: '78e02e3c-4074-484c-a6ce-545d386a5966',
    title: 'NODE',
    iconType: NodeIcon,
  },
  {
    id: '9855a4ca-48df-458b-9eec-256059073373',
    title: 'EXPRESS',
    iconType: ExpressIcon,
  },
  {
    id: '1392881d-a704-48f8-9c99-650b69626d6f',
    title: 'NESTJS',
    iconType: NestIcon,
  },
  {
    id: 'a6e98a9b-e788-4cf8-b31c-00f0347454d7',
    title: 'DOCKER',
    iconType: DockerIcon,
  },
  {
    id: 'ede5e5b0-7307-4ebb-be57-19757daf27c2',
    title: 'MYSQL',
    iconType: MysqlIcon,
  },
  {
    id: 'ee82c055-4b62-435b-bfc8-79d4e8718aff',
    title: 'POSTGRES',
    iconType: PostgresIcon,
  },
  {
    id: '328a7a91-33bf-43ca-bce8-9e9f3c91eb24',
    title: 'MONGODB',
    iconType: MongoIcon,
  },
];

export default frontend;
