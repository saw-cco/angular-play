import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as PIXI from 'pixi.js'

const COLORS = {
  "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff", "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887", "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff", "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f", "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1", "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff", "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff", "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f",
  "honeydew": "#f0fff0", "hotpink": "#ff69b4", "indianred ": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c", "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2", "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de", "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6", "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee", "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5", "navajowhite": "#ffdead", "navy": "#000080", "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6", "palegoldenrod": "#eee8aa",
  "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080", "rebeccapurple": "#663399", "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1", "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4", "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0", "violet": "#ee82ee", "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5", "yellow": "#ffff00", "yellowgreen": "#9acd32"
}

interface Point {
  x: number,
  y: number,
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]
})
export class AppComponent implements OnInit {

  private app: PIXI.Application = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight
  });

  title = 'angular-play';

  ngOnInit(): void {
    document.body.appendChild((this.app.view as unknown) as Node);

    const graphics = new PIXI.Graphics();

    const start = -90;
    const delta = 360 / 5;

    this.pie(start, 0Xff5733);
    this.pie(start + delta, 0xf7ff02);
    this.pie(start + 2 * delta, 0x02ff0d);
    this.pie(start + 3 * delta, 0x026aff);
    this.pie(start + 4 * delta, 0xff0202);

    this.scores(this.randomScores(start + 0 * delta, 3));
    this.scores(this.randomScores(start + 1 * delta, 5));
    this.scores(this.randomScores(start + 2 * delta, 7));
    this.scores(this.randomScores(start + 3 * delta, 4));
    this.scores(this.randomScores(start + 4 * delta, 6));
  }

  pie(beginAngle: number, color: number) {

    const graphics = new PIXI.Graphics();
    const radius = 300;
    const endAngle = beginAngle + (360 / 5.0);
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const begin = this.toRadians(beginAngle);
    const end = this.toRadians(endAngle);

    graphics.lineStyle(1, 0x000000, 1);
    graphics.beginFill(color, 1);

    graphics.moveTo(centerX, centerY);
    graphics.lineTo(centerX + radius * Math.cos(begin), centerY + radius * Math.sin(begin));

    graphics.arc(centerX, centerY, radius, begin, end);

    graphics.moveTo(centerX, centerY);
    graphics.lineTo(centerX + radius * Math.cos(end), centerY + radius * Math.sin(end));
    graphics.endFill();

    this.app.stage.addChild(graphics);

    // this.scores([
    //   this.polar(-90, 300),
    //   this.polar(-80, 200),
    //   this.polar(-70, 20),
    //   this.polar(-60, 115),
    //   this.polar(-18, 270),
    // ])


  }

  randomScores(beginAngle: number, count: number) {

    const delta = 360.0 / (5.0 * (count - 1));

    var scores: Point[] = new Array(count);

    for (let i = 0; i < count; i++) {

      let angle = beginAngle + i * delta;

      scores[i] = this.polar(angle, 75 + 150 * Math.random());
    }

    return scores;
  }

  scores(points: Point[]) {

    if (points.length > 1) {

      const graphics = new PIXI.Graphics();

      graphics.lineStyle(1, 0X000000, 1);
      
      graphics.moveTo(points[0].x, points[0].y);
      
      points.slice(1).forEach(p => graphics.lineTo(p.x, p.y));
      
      graphics.moveTo(points[0].x, points[0].y);
      
      let i = 1;
      
      for (; i < points.length - 2; i++) {
        var xc = (points[i].x + points[i + 1].x) / 2;
        var yc = (points[i].y + points[i + 1].y) / 2;
        graphics.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      graphics.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
      
      points.forEach(p => {
        const g = new PIXI.Graphics();
        
        g.lineStyle(4, 0XFFFFFF, 1);
        g.drawCircle(p.x, p.y, 5)
       
        g.interactive = true;
        g.hitArea = new PIXI.Circle(p.x, p.y, 5);

        g.alpha = 0.5;

        g.onmouseover = function(mouseData) {
          this.alpha = 1;
        }
        
        // make circle half-transparent when mouse leaves
        g.onmouseout = function(mouseData) {
          this.alpha = 0.5;
        }

        this.app.stage.addChild(g);
      });

      this.app.stage.addChild(graphics);
    }
  }

  polar(angle: number, length: number): Point {

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = length * Math.cos(this.toRadians(angle)) + centerX;
    const y = length * Math.sin(this.toRadians(angle)) + centerY;

    return { x: x, y: y };
  }

  toRadians(degrees: number): number {

    return (degrees / 180.0) * Math.PI;
  }
}
