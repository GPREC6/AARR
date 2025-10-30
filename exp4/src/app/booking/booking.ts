import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css'],
})
export class Booking {
name: string = '';
persons: number | null = null;
destination: string = '';
bookingConfirmed = false;
submitBooking() {
if (this.name && this.persons && this.destination) {
this.bookingConfirmed = true;
}
}
}
