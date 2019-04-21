import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-img-collapse',
  templateUrl: './img-collapse.component.html',
  styleUrls: ['./img-collapse.component.scss']
})
export class ImgCollapseComponent implements OnInit {
  @Input() images: [];
  @Input() name: string;
  selectedImg: number;
  selectedImgIndex: number;
  lastImgIndex:number;
  imgCollapseFirst:number;
  imgCollapseLast:number;

  constructor(private refresh: ChangeDetectorRef) { }

  public selectImg(i:number) {
    this.selectedImgIndex = i;
    this.selectedImg = this.images[this.selectedImgIndex];
    this.refresh.detectChanges();
  }

  public selectImgDown() {
    if(this.selectedImgIndex > 0) {
      this.selectImg(this.selectedImgIndex - 1)
      if (this.imgCollapseLast > 4) {
        this.imgCollapse(-1);
      }
    }
    this.refresh.detectChanges();
  }

  public selectImgUp() {
    if (this.selectedImgIndex < this.lastImgIndex) {
      this.selectImg(this.selectedImgIndex + 1);
      if (this.imgCollapseFirst < this.images.length - 4) {
        this.imgCollapse(1);
      }
    }
    this.refresh.detectChanges();
  }

  private lastImage() {
    this.lastImgIndex = this.images.length - 1;
  }

  private imgCollapse(value: number) {
    this.imgCollapseFirst = this.imgCollapseFirst + value;
    this.imgCollapseLast = this.imgCollapseLast + value;
  }

  ngOnInit() {
    this.imgCollapseFirst = 0;
    this.imgCollapseLast = 4;
    this.selectImg(0);
    this.lastImage();
  }
}
