import {Component, OnInit} from '@angular/core';
import {AuthService} from '@app/shared/services/auth.service';
import {Apollo, gql, QueryRef} from 'apollo-angular';
import {Pagina} from '@app/shared/models/pagina';
import {Observable} from 'rxjs';
import {Igreja, IgrejasGQL, IgrejasQuery} from '../../../generated/graphql';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  paginas$: Observable<IgrejasQuery['igrejas']>;
  loading = true;
  error: any;

  constructor(public authService: AuthService, private igrejasGQL: IgrejasGQL) {
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
