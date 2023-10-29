import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Post } from '../post';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  posts:Post[]=[];
   constructor( private _NewsService:NewsService){
    _NewsService.getRecipes().subscribe((data)=>{
      this.posts=data.meals;
    })
   }

  ngOnInit(): void {
    
  }

}
