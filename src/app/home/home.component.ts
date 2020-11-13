import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slide: string[] = []; 
  id="";
  video_selected=true;
  
  constructor(private dataservice:DataService,private router:Router) {      
  }
 
  ngOnInit(): void {
    this.getBanner();
    this.getHomeVideos();
  }
  getBanner(){
     this.dataservice.getBanner()
    .subscribe((resp:any)=>{
      // console.log(resp)
      for(var i=0; i< resp.length; i++) {
        this.slide.push(resp[i].thumbUrl)
      }
      // this.slide=resp[0].thumbUrl
    //  console.log(this.slide);
    })
  }
  allCategorys;
 
  getHomeVideos(){
    this.dataservice.getHomeVideos()
    .subscribe((resp:any)=>{
     this.allCategorys = resp;
   
      })
  }
    url; options; cname; videoPass;
  getId(videoId, catName){   
       this.id =videoId;
      this.video_selected = !this.video_selected;
        for(var i = 0; i< this.allCategorys.length; i++) {
          if(this.allCategorys[i].category == catName) {
            this.videoPass = this.allCategorys[i].videos;        
              break;
      }

    }

  }
}

