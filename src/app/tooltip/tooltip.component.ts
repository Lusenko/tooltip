import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  ngOnInit(): void {
    const icon = (document.querySelector('.icon') as HTMLElement);
    icon.style.position = 'absolute';
    icon.style.top = '0';
    icon.style.right = '0';
  }

}
