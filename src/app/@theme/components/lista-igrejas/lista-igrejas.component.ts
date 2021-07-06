import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DeleteIgrejaGQL, DeleteIgrejaMutation, IgrejasGQL, IgrejasQuery} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';
import {MessageBox} from '@app/shared/utill/message-box';

@Component({
  selector: 'app-lista-igrejas',
  templateUrl: './lista-igrejas.component.html',
  styleUrls: ['./lista-igrejas.component.scss']
})
export class ListaIgrejasComponent implements OnInit {
  private messageBox: MessageBox = new MessageBox();
  igrejas$: Observable<IgrejasQuery['igrejas']>;
  loading = true;
  error: any;

  constructor(private igrejasGQL: IgrejasGQL, private deleteIgreja: DeleteIgrejaGQL) {
    this.igrejas$ = this.igrejasGQL.watch().valueChanges.pipe(map((result) => (
      this.loading = result.loading,
        result.data.igrejas
    )));
  }

  ngOnInit(): void {
  }

  public excluirIgreja(id: string): void {
    this.messageBox.alertConfirm('Exluir a igreja selecionada?', (result: any) => {
      if (result.isConfirmed){
        this.deleteIgreja.mutate({id}).subscribe((deleteIgreja: any) => {
          console.log(deleteIgreja);
          // this.loading = deleteIgreja.loading;
          this.messageBox.notifyError(deleteIgreja, {position: 'bottom'});
        });
      }
    });
  }

}
