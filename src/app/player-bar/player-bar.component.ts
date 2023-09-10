import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent {
  @Input() trackPlayer: any;
  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef;

  isPlaying = false;
  Constructor() { }
  logInfo() {
    console.log(this.trackPlayer);
  }
  togglePlayPause() {
    const audio: HTMLAudioElement = this.audioPlayer.nativeElement;


    // Kiểm tra xem trackPlayer và preview_url có tồn tại
    if (this.trackPlayer && this.trackPlayer.preview_url) {
      if (this.isPlaying) {
        audio.pause();
        console.log("pause");
      } else {
        audio.src = this.trackPlayer.preview_url; // Cập nhật src của phần tử audio
        audio.play();
        console.log("play");
      }
      this.isPlaying = !this.isPlaying;
    }
  }
}

