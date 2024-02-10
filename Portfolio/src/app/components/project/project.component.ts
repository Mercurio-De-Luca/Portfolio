import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  arrayProject = [
    {
      classe: "card1",
      nome: "Clone Netflix",
      description: "Un progetto responsive statico, sviluppato con HTML, CSS e Bootstrap ",
      link: "https://github.com/Mercurio-De-Luca/fs0223-Mercurio-De-Luca/tree/master/m2/s2/g4"
    },
    {
      classe: "card2",
      nome: "Calcolatrice",
      description: "Un progetto sviluppato con HTML, CSS è JavaScript non Responsive"
    },
    {
      classe: "card3",
      nome: "Shop online",
      description: "Un progetto responsive sviluppato in HTML, CSS, Bootstrap e Javascript che effettua delle chiamate GET, POST, PUT e DELETE "
    },
    {
      classe: "card4",
      nome: "Clone Spotify",
      description: "È un progetto responsive sviluppato con HTML, CSS, Bootstrap e JavaScript"
    },
    {
      classe: "card5",
      nome: "AppWeather",
      description: "Progetto sviluppato con HTML, Tailwind e JavaScript che effettua una chiamata GET  "
    },
    {
      classe: "card6",
      nome: "To Do List",
      description: "È un progetto sviluppato in Angular. È il mio primo progetto sviluppato in Angular, si tratta di una to do List dove è possibile aggiungere, modificare ed eliminare una Todo. "
    },
    {
      classe: "card7",
      nome: "Dream Hair Implant",
      description: "Un progetto responsive sviluppato per un mio amico dove ho utilizzato Angular e Bootstrap ",
      coloretext: "text-black"
    }
  ]


  clickCard1(){
    window.open('https://github.com/Mercurio-De-Luca/fs0223-Mercurio-De-Luca/tree/master/m2/s2/g4', '_blank')
  }

}
