import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as PIXI from 'pixi.js'

@Component({
  selector: 'app-mirror',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.css']
})
export class MirrorComponent {
  private app: PIXI.Application = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight
  });
}
