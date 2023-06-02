import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private elementRef: ElementRef,private renderer: Renderer2) {}

  uzmanlikAlanlar=[
    "Şirketler Hukuku",
    "Ceza Hukuku",
    "İş Hukuku",
    "Gayrimenkul Hukuku",
    "İdare Hukuku",
    "Uzmanlık Alanları",
    "Uzmanlık Alanları",
    "Uzmanlık Alanları",
  ]

  avukatlar=[
    "Perihan Terzi",
    "Perihan Terzi",
    "Perihan Terzi",
    "Perihan Terzi",
    "Perihan Terzi",
  ]

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    let element = document.getElementById("ekibimiz");
    console.log(window.scrollY);
    console.log(screen.height);

    if (window.scrollY > screen.height / 3.5) {
      console.log("Girdi!!");

      element?.classList.add("centerToOuter");
    }
  }
}
