import {User} from '@app/shared/models/userGraph';

export interface Pagina {
  id: string;
  createdAt: Date;
  createdBy: User;
  updatedAt: Date;
  updatedBy: User;
  publishedAt: Date;
  publishedBy: User;

  titulo: string;
  slug: string;
  conteudo: any;

}
