import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements AfterViewInit, AfterContentChecked {

  linkInstagram = LinkConstants.linkInstagram;
  linkFaceBook = LinkConstants.linkFaceBook;
  linkLinkedin = LinkConstants.linkLinkedin;
  linkTwitter = LinkConstants.linkTwitter;
  isSmallScreen: boolean = false;
  menuToggle!: HTMLElement;
  menu!: HTMLElement;

  categories = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'aboutUs' },
    { name: 'Photos', id: 'photos' },
    { name: 'Contact', id: 'contact' },
  ];

  constructor(private route: ActivatedRoute) {
    const url = this.route;
    console.log(route.snapshot.queryParamMap);
    console.log(url);

    if (window.screen.width < 600) {
      this.isSmallScreen = true;
    } else {
      this.isSmallScreen = false;
    }
  }
  ngAfterViewInit() {

    console.log("1Girdi");

  }

  ngAfterContentChecked(): void {
      console.log("window.location:",window.location.pathname);
    if(window.location.pathname == "/home"){
      document.getElementById("")?.classList.add("menu");
      document.getElementById("")?.classList.remove("menu");
    }else{
      document.getElementById("")?.classList.remove("");
    }
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
