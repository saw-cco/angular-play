import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit{
  
  
  ngOnInit(): void {
    let frameNumber = 0;
    let playbackConst = 500;
    let setHeight = document.getElementById("set-height")!;
    let vid = document.getElementById('v0')! as HTMLVideoElement; 
    
    if(vid)
    {
      vid.addEventListener(
        'loadedmetadata', function() {
        setHeight.style.height = Math.floor(vid.duration) * 2 * playbackConst + "px";
      });
    }

    function scrollPlay(){  
      var frameNumber  = window.pageYOffset/playbackConst;
      vid.currentTime  = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    }
    
    window.requestAnimationFrame(scrollPlay);
  }

}
