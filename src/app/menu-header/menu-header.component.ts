import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements AfterViewInit {

  linkInstagram = LinkConstants.linkInstagram;
  linkFaceBook = LinkConstants.linkFaceBook;
  linkLinkedin = LinkConstants.linkLinkedin;
  linkTwitter = LinkConstants.linkTwitter;
  isSmallScreen: boolean = false;
  menuToggle!: HTMLElement;
  menu!: HTMLElement;

  categories = [
    { name: 'Ana Sayfa', id: 'home' },
    { name: 'Hakkımızda', id: 'hakkimizda' },
    { name: 'Uzmanlık Alanları', id: 'uzmanlik-alanlari' },
    { name: 'Ekibimiz', id: 'ekibimiz' },
    { name: 'Blog', id: 'blog' },
    { name: 'İletişim', id: 'iletisim' },

  ];

  constructor(private _router: Router) {
    if (window.screen.width < 600) {
      this.isSmallScreen = true;
    } else {
      this.isSmallScreen = false;
    }
  }
  ngAfterViewInit() {
    this._router.events.subscribe(a => {
      const currentUrl = window.location.pathname;
      if (currentUrl !== "/home") {
        document.documentElement.style.setProperty("--pos", "inherit");
        document.documentElement.style.setProperty("--bg-color", "#535353");
      } else {
        document.documentElement.style.setProperty("--pos", "absolute");
        document.documentElement.style.setProperty("--bg-color", "transparent");
      }
    });
  }

  goToLink(link: string) {
    window.open(link);
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.screen.width < 830) {
      this.isSmallScreen = true;

    } else {
      this.isSmallScreen = false;
    }
  }
}


export enum LinkConstants {
  linkInstagram = "",
  linkFaceBook = "https://www.facebook.com/talhaseref.alatas/",
  linkLinkedin = "https://www.linkedin.com/in/perihan-terzi/",
  linkTwitter = "https://twitter.com/talhaalatass",
}
