import { Component, OnInit } from '@angular/core';
import { Contribution } from 'src/app/models/contribution';
import { ContributionService } from 'src/app/services/contribution.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {

  contribution: Contribution = {id: 0, content: "", project: 0, user: 0};

  constructor(private service: ContributionService) { }

  ngOnInit(): void {
  }
  doRegister(): void{
    this.service.addContribution(this.contribution).subscribe(data => {
      this.contribution = data;
    })
  }

}
