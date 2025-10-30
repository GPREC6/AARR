import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination',
  imports: [CommonModule],
  templateUrl: './destination.html',
  styleUrls: ['./destination.css'],
})
export class Destination {
selected: string = '';
destinations: { [key: string]: string[] } = {
Paris: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
Tokyo: ['Tokyo Tower', 'Shinjuku Gyoen', 'Asakusa Temple'],
'New York': ['Statue of Liberty', 'Central Park', 'Times Square'],
Dubai: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall']
};
selectDestination(destination: string) {
this.selected = destination;
}
}
