import {Component} from '@angular/core';
import {NbMenuItem, NbMenuService, NbThemeService} from '@nebular/theme';
import {NbSidebarService} from '@nebular/theme';
import {AuthService} from '@app/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-firebase-login';
  currentTheme = 'default';
  items: NbMenuItem[] = [
    {
      title: 'Meu Perfil',
      link: 'dashboard',
      icon: 'person'
    },
    {
      title: 'Igrejas',
      link: 'igreja',
      icon: 'globe',
      children: [
        {
          title: 'Listar igrejas',
          link: 'igreja',
          icon: 'list',
        },
        {
          title: 'Adicionar nova igreja',
          link: 'igreja',
          icon: 'plus',
        }
      ]
    },
    {
      title: 'Sair',
      link: 'dashboard',
      icon: 'log-out'
    }
  ];

  constructor(
    private sidebarService: NbSidebarService,
    public authService: AuthService,
    private themeService: NbThemeService,
    private menuService: NbMenuService,
  ) {
  }

  toggle() {
    this.sidebarService.toggle();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

}
