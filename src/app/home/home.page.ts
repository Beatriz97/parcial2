import { Component } from '@angular/core'; 
import { MediaCapture, MediaFile } from '@ionic-native/media-capture/ngx';
import { SocialSharing} from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public mediaCapture:MediaCapture, 
              public socialSharing:SocialSharing) {}

 CaptureAudio(){
   this.mediaCapture.captureAudio().then((audio:MediaFile[])=>{
     this.ShareMedia("audio file capture by media capture plugin", "media capture", audio[0].fullPath,"");
   }, (err)=>{
     alert(JSON.stringify(err));
   })
 }             

 ShareMedia(message,subject,filepath,url){
   this.socialSharing.share(message,subject,filepath,url).then(()=>{

   },(err)=>{
     alert(JSON.stringify(err));
   });
 }
 
}
