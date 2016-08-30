import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'other',
  templateUrl: 'app/other/other.component.html'
})
export class OtherComponent implements OnInit, OnDestroy{

    name:string;
    private sub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router:Router
    ){}

    ngOnInit(){
         this.sub = this.route.params.subscribe(params => {
            this.name = params['name'];
        });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }
}
