import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { animate, scroll } from 'motion';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { FourthPageComponent } from './pages/fourth-page/fourth-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, FirstPageComponent, SecondPageComponent, ThirdPageComponent, FourthPageComponent]
})
export class AppComponent implements AfterContentInit {
  videoRef!: HTMLVideoElement;

  @ViewChild('videoPlayer', { static: true })
  set mainVideoEl(el: ElementRef) {
    this.videoRef = el.nativeElement;
  }

  frameNumber = 0; // start video at frame 0
  playbackConst = 600; // speed of video. lower is faster

  ngAfterContentInit(): void {
    window.requestAnimationFrame(this.scrollPlay.bind(this));
  }

  scrollPlay() {
    this.frameNumber  = window.pageYOffset / this.playbackConst;
    this.videoRef.currentTime  = this.frameNumber;
    window.requestAnimationFrame(this.scrollPlay.bind(this));
  }
}
