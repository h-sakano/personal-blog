import { MicrocmsPostType, PostType } from './types';

export const isMicrocmsPost = (item: PostType): item is MicrocmsPostType => {
  if (item.node.internal.type === 'MicrocmsPosts') {
    return true;
  }
  return false;
};
