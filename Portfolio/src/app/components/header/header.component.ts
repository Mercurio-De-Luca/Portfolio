import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {



  constructor(private el: ElementRef, private renderer: Renderer2) { }

  rimuoviClasse() {
    const elemento = this.el.nativeElement.querySelector('ul');


    if (elemento) {
      const classePresente = elemento.classList.contains('hidden');


      if (classePresente) {
        elemento.classList.remove('hidden');
      } else {
        elemento.classList.add('hidden');
      }
    } else {
      console.error("Elemento non trovato con il selettore 'ul'");
    }
  }

}
