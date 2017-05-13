import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { EmitterService } from '../emitter.service';

@Component({
    selector: 'new-conversation',
    templateUrl: 'app/newconversation/newConversation.component.html',
    styles: [`
			md-card {
				margin: 10px auto 0 auto;
				width: 550px;
				border-radius: 5px;
				text-align: left;
			}
    `],
    providers: [ ProjectsService ]
})
export class NewConversationComponent {
    name: string;
    project_id: Observable<string>;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private emitter: EmitterService,
                private service: ProjectsService) {
                    this.project_id = router
                        .routerState
                        .parent(route)
                        .params
                        .map(params => params['id']);
                }

    handleClick() {
        this.project_id
            .flatMap(id => this.service.createConversation(id, this.name))
            .subscribe(conv => {
                this.emitter.next(conv);
                this.router.navigate(['../', conv.id], { relativeTo: this.route })
            });
    }
}