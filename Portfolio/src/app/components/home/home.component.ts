import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy  {

  arrayString: string[] = ["Un Junior Front-end", "Un Junior Back-end", "Un Junior Full-stack"];
  stringaCorrente: string = '';
  currentIndex = 0;
  destroy$: Subject<void> = new Subject<void>();

  ngOnInit() {
    interval(3000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.changeString()
        this.animateText()
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeString() {
    this.stringaCorrente = this.arrayString[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.arrayString.length;
  }

  animateText() {
    const letters = this.stringaCorrente.split('');
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex === letters.length) {
        clearInterval(intervalId);
      } else {
        this.stringaCorrente = letters.slice(0, currentIndex + 1).join('');
        currentIndex++;
      }
    }, 100);
  }



  downloadPdf(){

    const PDF = 'https://drive.google.com/file/d/1R7PXjfNd_KjP-dS-ilUY78EnuIFCoa7S/view?usp=sharing';

    const a = document.createElement('a');
    a.href = PDF;
    a.download = 'IlMioCv.pdf';
    a.click();
  }
}
