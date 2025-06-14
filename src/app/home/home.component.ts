import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit  {
 
  constructor(private scrollService: ScrollService){}


   @ViewChild('homeSection') homeSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('educationSection') educationSection!: ElementRef;
  @ViewChild('experienceSection') experienceSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  // constructor(private scrollService: ScrollService) {}
  

  ngAfterViewInit(): void {
    this.scrollService.registerSection('home', this.homeSection);
    this.scrollService.registerSection('about', this.aboutSection);
    this.scrollService.registerSection('skills', this.skillsSection);
    console.log( this.scrollService);
    
    this.scrollService.registerSection('education', this.educationSection);
    this.scrollService.registerSection('experience', this.experienceSection);
    this.scrollService.registerSection('contact', this.contactSection);
  }

  
  name = 'Vipin Joshi';
  title = 'Full Stack Developer'
  about = `I am a passionate Full Stack Developer skilled in Angular, JavaScript, Node.js, and more. 
           I love building beautiful and performant web applications.`
  skills = ['Angular ', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'MongoDB']

  education = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'Graphic Era University, Dehradun (UK)',
      year: '2020 - 2021',
      performance: 'CGPA: 7.8',
      description:
        'Completed MCA with a focus on advanced topics in software development, cloud computing, and database systems. Gained hands-on experience through projects and practical assignments.'
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Himalayan Institute of Technology, Dehradun (UK)',
      year: '2017 - 2020',
      performance: 'CGPA: 6.7',
      description:
        'Studied core subjects like Java, C++, Database Management, and Web Technologies. Developed academic projects and strengthened programming fundamentals.'
    },
    {
      degree: 'Higher Secondary School (12th)',
      institution: 'BSA Inter College',
      year: '2015',
      performance: 'Percentage: 53%',
      description:
        'Completed Higher Secondary Education with a focus on Science and Mathematics. Gained foundational skills in logical reasoning and analytical thinking.'
    },
    {
      degree: 'High School (10th)',
      institution: 'BSA Inter College',
      year: '2013',
      performance: 'Percentage: 66%',
      description:
        'Completed 10th standard with a strong academic performance, building a base in core subjects including Mathematics, Science, and English.'
    }
  ];

  experience = [
    {
      company: 'IRAYSIS Pvt. Ltd., Noida',
      role: 'Web Developer',
      duration: '2021 - Present',
      projects: [
        {
          name: "Child's own ",
          period: '  Nov 2023 - Present',
          stack: 'Angular 15, TypeScript, JavaScript, HTML, CSS, Bootstrap',
          description: 'Developed a government-guaranteed business platform from scratch.',
          link: 'https://www.childsown.com/'
        },
        {
          name: 'MyPlushBuddy',
          period: '  Oct 2022 - Nov 2023',
          stack: 'Angular 16, TypeScript, JavaScript, HTML, CSS, Bootstrap',
          description: 'Delivered customized toy and personalized product solutions.',
          link: 'https://www.myplushbuddy.com'
        }
      ]
    }
  ];
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Contact Form Submitted', this.contact);
    alert('Message sent!');
    // In real app, integrate with email service API.
  }



}
