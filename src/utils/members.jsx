import vimarsh from "../assets/students/vimarsh.jpg"
import pranav from "../assets/students/pranav.jpg"

import smrithi from '../assets/students/smrithi.jpeg';
import vishnu from '../assets/students/vishnu.jpeg';
import aashishkanted from '../assets/students/aashishkanted.jpg'
import arjunputhli from '../assets/students/arjunputhli.jpg'
import nitya from '../assets/students/nitya.jpg'
import aasim from "../assets/students/aasim.jpeg"
import ritwik from "../assets/students/ritwik.jpg"

import arya from '../assets/students/arya.jpeg'
import raghav from '../assets/students/raghav.jpeg'
import rajdeep from "../assets/students/rajdeep.jpeg"
import samar from '../assets/students/samar.jpeg'
import vishnuganti from '../assets/students/vishnuganti1.jpeg'
import adarsh from '../assets/students/adarsh.jpeg'
import ajinkya from "../assets/students/ajinkya.jpeg"
import om from "../assets/students/om.jpeg"
import parth from "../assets/students/parth.jpg"

import aniket from "../assets/students/aniket.webp"

import varinder from '../assets/faculty/varinder1.jpeg';

let student = [
  {
    name:"Om Jaiswal",
    email:"f20220483@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/om-jaiswal-b4716a190",
    image:om
  },
  {
    name: 'Ritwik',
    mobile: '+919999326476',
    email: 'f20220470@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/ritwik-sharma-609a38268',
    image: ritwik,
  },
  {
    name:"Parth Shah",
    email:"f20221168@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/parth-shah-b014771b0",
    image:parth
  },
  {
    name:"Aniket Sonawane",
    email:"f20220031@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/aniket-sonawane-3a87b9249/",
    image:aniket
  },
  {
    name:"Ajikya Deshpande",
    email:"f20220746@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/ajinkya-deshpande-6ab13b265",
    image:ajinkya
  },

  {
    name:"Adarsh Pai",
    email:"f20220698@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/adarsh-pai-063050263",
    image:adarsh
  },

  {
    name:"Arya Kulkarni",
    email:"f20220557@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/arya-kulkarni-a68b55251",
    image:arya
  },
  {
    name:"Raghav Mohak Kumar",
    email:"f20220137@goa.bits-pilani.ac.in",
    linkedIn:"http://www.linkedin.com/in/raghav-mohan-kumar-427557246",
    image:raghav
  },
  {
    name:"Rajdeep Naha",
    email:"f20221218@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/rajdeep-naha-a6a032257",
    image:rajdeep
  },
  {
    name:"Vimarsh Shah",
    email:"f20221060@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/vimarshshah",
    image:vimarsh
  },
  {
    name:"Pranav Saxena",
    email:"f20220257@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/pranav-saxena13",
    image:pranav
  },
  {
    name:"Samar Jalil Siddiqui",
    email:"f20221135@goa.bita-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/samar-jalil-siddiqui-96b852299/",
    image:samar
  },
  {
    name:"Vishnu Ganti",
    email:"f20220579@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/vishnu-ganti-223898258",
    image:vishnuganti
  },
  {
    name: 'Smrithi Lokesh',
    email: 'f20212018@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/smrithi-ls-0894b7219',
    image: smrithi,
  },

  {
    name: 'Vishnu Vardhan Reddy Peddireddy',
    email: 'f20211199@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/',
    image: vishnu,
  },
  {
    name: 'Aashish Kanted',
    email: 'f20211912@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/aashish-kanted-7a3707225',
    image: aashishkanted,
  },
  {
    name: 'Arjun Puthli',
    email: 'f20212249@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/mwlite/in/arjun-puthli-810938189',
    image: arjunputhli,
  },
  {
    name: 'Nitya Ahuja',
    email: 'f20212293@goa.bits-pilani.ac.in',
    linkedIn: 'https://www.linkedin.com/in/nitya-ahuja-516240237/',
    image: nitya,
  },
  {
    name:"Aasim Sayyed",
    email:"f20212027@goa.bits-pilani.ac.in",
    linkedIn:"https://www.linkedin.com/in/aasim-sayyed-a966b423a/",
    image:aasim
  }
];

let faculty = [
  {
    image: varinder,
    name: 'Dr. Varinder Singh',
    url: 'https://www.bits-pilani.ac.in/goa/varinder-singh/',
  }
];

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

student.sort(compare);
// faculty.sort(compare);

export { student, faculty };
