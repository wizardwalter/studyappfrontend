import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questions } from '../models/question';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-sysoptests',
  templateUrl: './sysoptests.component.html',
  styleUrls: ['./sysoptests.component.css']
})
export class SysoptestsComponent implements OnInit {
  testNum: any;
  questions:any;
  currentQuestion: any;
  counter:any = 0;
  constructor(public activatedRoute: ActivatedRoute, public TestService: TestService) { }

  ngOnInit(): void {
    var card = document.querySelectorAll('.card');
    card.forEach(card => card.addEventListener('click', () =>{  card.classList.toggle('is-flipped')}));
    this.activatedRoute.paramMap.subscribe( async params =>{
       this.testNum = params.get('testnumber');
       (await this.TestService.getTest(this.testNum)).subscribe((res : any) => {
        this.currentQuestion = res['questions'][0];
        this.questions = res['questions']
        console.log(this.questions)
      })
    })

    console.log(this.currentQuestion)
  }


  onRightArrowClick(){
    // if(this.counter == this.questions.length){
    //   document.getElementById('arrow-right')!.setAttribute("disabled","disabled")
    // }else{
    document.getElementById('arrow-right')!.removeAttribute("disabled")
    this.counter++
    this.currentQuestion = this.questions[this.counter]
    // }
  }

  onLeftArrowClick(){
    // if(this.counter == 0){
    //   document.getElementById('arrow-left')!.setAttribute("disabled","disabled")
    // }else{
    //   document.getElementById('arrow-left')!.setAttribute("enabled", "enabled")
      this.counter--
      this.currentQuestion = this.questions[this.counter]
    // }
  }


}
