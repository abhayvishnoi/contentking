import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ManageResourcesService } from '../shared/manage-resources.service';

@Component({
  selector: 'app-upload-asset',
  templateUrl: './upload-asset.component.html',
  styleUrls: ['./upload-asset.component.scss'],
})
export class UploadAssetComponent implements OnInit {
  uploading: boolean = false;
  err: boolean = false;
  brandId = 1;
  eventText: string = '';
  assets: any = [];
  delete!: boolean;
  assetsToUpload = 0;
  uploadedCount = 0;
  uploadingPercent = 0;
  constructor(private sharedService: ManageResourcesService) {}

  ngOnInit(): void {
    this.sharedService.getReq(`/assets/${this.brandId}`).subscribe(
      (r) => (this.assets = r.message.reverse()),
      (e) => console.log(e.error)
    );
    // console.log(this.assets);
  }
  startUploadEvent(formData: FormData) {
    this.err = false;
    this.startUploading(true);
    this.eventText = 'Uploading..';
    this.sharedService.uploadReq(`/assets/${this.brandId}`, formData).subscribe(
      (res: any) => {
        // console.log('Response => ', res.message);
        this.processResponse(res.message);
      },
      (err) => {
        this.uploadingPercent = 0;
        this.startUploading(false);
        this.eventText = err.error.message;
        this.err = true;
      },
      () => this.resetUpload()
    );
  }

  uploadFiles(event: any) {
    const files: File[] = event.target.files;
    if (files.length) {
      this.assetsToUpload = files.length;
      this.uploadedCount = 0;
      for (let index = 0; index < files.length; index++) {
        const formData = new FormData();
        const file = files[index];
        // Store form name as "file" with file data
        formData.append(`filename`, file, file.name);
        this.startUploadEvent(formData);
      }
    }
  }
  processResponse(res: any) {
    // console.log('Process response from server', res);
    this.assets = [res, ...this.assets];
    this.uploadedCount += 1;
    (this.uploadingPercent = Math.floor(
      (this.uploadedCount / this.assetsToUpload) * 100
    )),
      '%';
    if (this.uploadingPercent == 100) {
      this.uploadingPercent = 0;
      this.startUploading(false);
    }
  }
  startUploading(upload: boolean) {
    // if (!upload && this.uploadingPercent == 100) {
    //   this.uploading = upload;
    // } else if (upload) {
    this.uploading = upload;
    // }
  }
  resetUpload() {
    this.err = false;
  }

  deleteAsset(i: number, confirm?: number) {
    if (confirm === 1) {
      this.assets[i].delete = false;
      this.assets[i].count += 1;
      if (this.assets[i].count == 2) {
        this.deleteAssetData(i);
      }
    } else {
      this.assets[i].delete = true;
      this.assets[i].count = 0;
    }
  }
  resetDelete(i: number) {
    delete this.assets[i].delete;
    delete this.assets[i].count;
  }
  deleteAssetData(index: number) {
    let id = this.assets[index]['_id'];
    // console.log(this.assets[index]);
    this.sharedService
      .deleteReq(`/assets/${id}`)
      .subscribe((r) => this.assets.splice(index, 1));
  }
}
