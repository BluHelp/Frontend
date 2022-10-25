import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contribution } from 'src/app/models/contribution';
import { ContributionGet } from 'src/app/models/contribution-get';
import { ContributionService } from 'src/app/services/contribution.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {

  contribution: Contribution = {id: 0, content: "", project: this.activatedRoute.snapshot.params['id'], user: JSON.parse(this.userService.getUser()).id};
  contributionGet: Array<ContributionGet> = new Array()

  constructor(private service: ContributionService, private activatedRoute: ActivatedRoute, private userService: UserService ) { }

  ngOnInit(): void {
    this.getContri()
  }

  doRegister(): void{
    this.service.addComment(this.contribution).subscribe(data => {
      this.contribution = data;
      this.getContri()
    })
  }

  getContri(): void{
    this.service.getCommentsByProject(this.activatedRoute.snapshot.params['id']).subscribe(data => {
      this.contributionGet = data;
    })
  }

}
