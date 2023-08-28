import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private router: Router) {}

  goToIletisim() {
    this.router.navigate(['iletisim']);
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    let element = document.getElementById("ekibimiz");
    if (window.scrollY > screen.height / 3.5) {
      element?.classList.add("centerToOuter");
    }
  }
}
