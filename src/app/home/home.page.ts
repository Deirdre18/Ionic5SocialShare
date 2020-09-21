import { Component } from '@angular/core';
// IMPORT SOCIAL SHARING.
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text: string='Instagram Analytics'
  imgurl:string= 'https://i.ytimg.com/vi/d9EbXv4sPDE/maxresdefault.jpg'
  link: string='https://www.instagram.com/'

  constructor(
    // DON´T FORGET ADDING IT TO THE CONSTRUCTOR.
    private socialSharing: SocialSharing,
  ) {}
  
  ShareGeneric(parameter){
    const url = this.link
    const text = parameter+'\n'
    const imgurl = this.imgurl
    this.socialSharing.share(text, null, url, imgurl)
  }
  
  ShareFacebook(){
    this.socialSharing.shareViaFacebookWithPasteMessageHint(this.text, this.imgurl, null /* url */, 'Copy Paste!')
  }

  SendEmail(){
    this.socialSharing.shareViaEmail(this.text, this.imgurl, null /* url */, ['email@address.com'])
  }

  SendTwitter(){
    this.socialSharing.shareViaTwitter(this.text, this.imgurl, null /* url */)
  }

  SendInstagram(){
    this.socialSharing.shareViaInstagram(this.imgurl, null/* url */)
  }
  
}