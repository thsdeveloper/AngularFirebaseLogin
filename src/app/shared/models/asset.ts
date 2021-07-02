import {User} from '@app/shared/models/userGraph';

export interface Asset {

  // Show system fields
  id: string;
  createdAt: Date;
  createdBy: User;
  updatedAt: Date;
  updatedBy: User;
  publishedAt: Date;
  publishedBy: User;

  handle: string;
  fileName: string;
  fileName: string;
  height: number;
  width: number;
  mimeType: string;
}
