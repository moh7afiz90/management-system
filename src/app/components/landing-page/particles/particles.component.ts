import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit {

  myStyle: object = {};
	myParams: object = {};
	width = 100;
	height = 100;
    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 150,
                },
                color: {
                    value: '#00ffc4'
                },
                shape: {
                    type: 'circle',
                    image: {
                      src: 'https://static.pexels.com/photos/236698/pexels-photo-236698.jpeg',
                      width: 100,
                      height: 100
                    }
                }
}
            };
    }

}
