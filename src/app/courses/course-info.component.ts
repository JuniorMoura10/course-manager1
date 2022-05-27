import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CouseService } from "./course-service";

type course = Course;

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: course = new Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CouseService) { }

    ngOnInit(): void {

        this.course = this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
        
    }
}