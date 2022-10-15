import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ManageResourcesService } from '../shared/manage-resources.service';
import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

@Component({
  selector: 'app-canva',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.scss'],
})
export class CanvaComponent implements OnInit {
  // @ViewChild('container') container!: ElementRef;
  // @ViewChildren('container') components!: QueryList<any>;
  @ViewChildren('container') components!: any;
  @ViewChild('downloadButton') downloadButton!: ElementRef;

  constructor(private sharedService: ManageResourcesService) {}

  ngOnInit(): void {}

  download() {
    // @ts-ignore
    let results = this.components._results;
    let element = results[0].nativeElement;
    element.classList.add('scale-100');
    // console.log(results);
    //html2image
    let options = {};
    htmlToImage.toJpeg(element, options).then((dataURI) => {
      element.classList.remove('scale-100');
      let download = 'image.jpeg';
      let link = document.createElement('a');
      link.href = dataURI;
      link.download = download;
      link.click();
    });
  }
}
