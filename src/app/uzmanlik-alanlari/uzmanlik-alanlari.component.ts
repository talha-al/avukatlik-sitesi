import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-uzmanlik-alanlari',
  templateUrl: './uzmanlik-alanlari.component.html',
  styleUrls: ['./uzmanlik-alanlari.component.scss']
})
export class UzmanlikAlanlariComponent implements AfterViewInit {
  uzmanlikAlanlar: Uzmanliklar[] = [
    { name: "Aile Hukuku", icon: "fa-solid fa-house", description: "Test" },
    { name: "Şirketler Hukuku", icon: "fa-solid fa-building", description: "Test" },
    { name: "Ceza Hukuku", icon: "slz-icon fa fa-legal", description: "Test" },
    { name: "İş Hukuku", icon: "fa-solid fa-business-time", description: "Test" },
    { name: "Miras Hukuku", icon: "fa-solid fa-money-bill", description: "Test" },
    { name: "İdare ve Vergi Hukuku", icon: "slz-icon fa fa-try", description: "Test" },
    { name: "İcra ve İflas Hukuku", icon: "fa-solid fa-business-time", description: "Test" },
    { name: "Fikri Mülkiyet Hukuku", icon: "slz-icon fa fa-copyright", description: "Test" },
    { name: "Tüketici Hukuku", icon: "slz-icon fa fa-male", description: "Test" },
    { name: "Gayrimenkul ve İnşaat Hukuku", icon: "slz-icon fa fa-home", description: "Test" },
    { name: "Sigorta Hukuku", icon: "fa-solid fa-car-burst", description: "Test" },
    { name: "Kişisel Verilerin Korunması", icon: "slz-icon fa fa-lock", description: "Test" },
    { name: "Alternatif Uyuşmazlık Çözüm Yolları", icon: "slz-icon fa fa-bank", description: "Test" },
  ]

  ngAfterViewInit() {
    // localStorage.setItem("images",)
  }
}

export interface Uzmanliklar {
  name: string;
  icon: string;
  description: string;
}
