//Code taken from https://medium.com/@alejandrolp1986/social-sharing-in-your-ionic-5-app-6aea75448f0d

import { Component } from '@angular/core';
// IMPORT SOCIAL SHARING.
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text: string='Flamenco'
  imgurl:string= 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg'
  link: string='https://link.medium.com/JA4amAHFJ5'

  constructor(
    // DON´T FORGET ADDING IT TO THE CONSTRUCTOR.
    private socialSharing: SocialSharing,
  ) {}
  
  ShareGeneric(parameter){
    const url = this.link
    const text = parameter+'\n'
    this.socialSharing.share(text, 'MEDIUM', null, url)
  }
  
  ShareWhatsapp(){
    this.socialSharing.shareViaWhatsApp(this.text, this.imgurl, this.link)
  }

  ShareFacebook(){
    this.socialSharing.shareViaFacebookWithPasteMessageHint(this.text, this.imgurl, null /* url */, 'Copia Pega!')
  }

  SendEmail(){
    this.socialSharing.shareViaEmail('text', 'subject', ['email@address.com'])
  }

  SendTwitter(){
    this.socialSharing.shareViaTwitter(this.text, this.imgurl, this.link)
  }

  SendInstagram(){
    this.socialSharing.shareViaInstagram(this.text, this.imgurl)
  }
  
}