import { CreatePagesFromMicroCmsQuery, TagQuery } from '../types/graphql-types';
import { Flatten } from './utilityTypes';

export type MicrocmsPostType =
  | Flatten<CreatePagesFromMicroCmsQuery['allMicrocmsPosts']['edges']>
  | Flatten<TagQuery['allMicrocmsPosts']['edges']>;

export type PostType =
  | Flatten<CreatePagesFromMicroCmsQuery['allFeedQiitaPost']['edges']>
  | Flatten<CreatePagesFromMicroCmsQuery['allFeedZennPost']['edges']>
  | MicrocmsPostType;
