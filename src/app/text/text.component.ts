import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input() label: string = 'Prompt!';
  @Input() labelColor: string = '#fff';
  @Input() bgColor: string = 'red';
}
