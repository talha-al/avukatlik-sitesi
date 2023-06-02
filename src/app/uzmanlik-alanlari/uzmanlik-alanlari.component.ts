import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-uzmanlik-alanlari',
  templateUrl: './uzmanlik-alanlari.component.html',
  styleUrls: ['./uzmanlik-alanlari.component.scss']
})
export class UzmanlikAlanlariComponent implements AfterViewInit {
  uzmanlikAlanlar = [
    "Şirketler Hukuku",
    "Ceza Hukuku",
    "İş Hukuku",
    "Gayrimenkul Hukuku",
    "İdare Hukuku",
    "Uzmanlık Alanları",
    "Uzmanlık Alanları",
    "Uzmanlık Alanları",
  ]

  ngAfterViewInit(){
    // localStorage.setItem("images",)
  }
}
