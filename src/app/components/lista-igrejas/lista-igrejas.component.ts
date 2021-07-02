import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IgrejasGQL, IgrejasQuery} from '../../../generated/graphql';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-lista-igrejas',
  templateUrl: './lista-igrejas.component.html',
  styleUrls: ['./lista-igrejas.component.scss']
})
export class ListaIgrejasComponent implements OnInit {
  paginas$: Observable<IgrejasQuery['igrejas']>;
  loading = true;
  error: any;

  constructor(private igrejasGQL: IgrejasGQL) {
    this.paginas$ = this.igrejasGQL.watch().valueChanges.pipe(map((result) => (
      this.loading = result.loading,
        result.data.igrejas
    )));
  }

  ngOnInit(): void {
    // this.queryRef = this.igrejasGQL.watch();
    // this.paginas$ = this.queryRef.valueChanges.pipe(
    //   map((result) => result.data.igrejas)
    // );
    //
    //


    //   this.IgrejasGQL.watchQuery({
    //     query: gql`
    //         {
    //           paginas {
    //   slug
    //   updatedAt
    //   titulo
    //   id
    //   createdAt
    //   publishedAt
    //   conteudo {
    //     markdown
    //   }
    //   stage
    // }
    //       }
    //       `,
    //   }).valueChanges.subscribe((result: any) => {
    //     console.log(result);
    //     this.paginas = result?.data?.paginas;
    //     this.loading = result.loading;
    //     this.error = result.error;
    //   });
  }

}
