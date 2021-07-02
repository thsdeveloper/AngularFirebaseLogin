import {User} from '@app/shared/models/userGraph';
import {Asset} from '@app/shared/models/asset';

export interface Igreja {
  id: string;
  createdAt: Date;
  createdBy: User;
  updatedAt: Date;
  updatedBy: User;
  publishedAt: Date;
  publishedBy: User;

  nome: string;
  slug: string;
  localizacao: Location;
  descricao: string;
  images: Asset[];
  ativo: boolean;
  data_fundacao: Date;
}
