import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
const candidateData = {
  username: 'Gurleen Kaur Nanda',
  enrollmentNumber: '0200202020022020202',
  category: 'General',
  state: 'Delhi',
  AIR: '1000000',
  stateRank: '1000000',
  collegePreferences: [
    { type: 'AIQ R1 College', name: 'ABCD University Private Limited', joiningStatus: 'Yes' },
    { type: 'State R1 College', name: 'ABCD University Private Limited', joiningStatus: 'Yes' },
    { type: 'AIQ R2 College', name: 'ABCD University Private Limited', joiningStatus: 'Yes' },
    { type: 'State R2 College', name: 'ABCD University Private Limited', joiningStatus: 'Yes' },
  ],
};

const plans = [
  {
    name: 'Offline Plan',
    price: 15999,
    benefits: [
      'Office meeting, counselling planning and discussion with Mr Shobhit Verma',
      'In depth clarity on how to approaching counselling based on your requirements.',
      'Office meeting, counselling planning and discussion with Mr Shobhit Verma',
      'In depth clarity on how to approaching counselling based on your requirements.',
      'Office meeting, counselling planning and discussion with Mr Shobhit Verma',
      'In depth clarity on how to approaching counselling based on your requirements.',
    ],
  }
];

const onlinePlans = [
  {
    name: 'Plan A : Personalised Counselling Service',
    price: 8500,
    benefits: [
      'Orientation session via Google Meet',
      'Personalised College List based on individual preferences',
      'List Modification in every round as required',
      'Orientation session via Google Meet',
      'Personalised College List based on individual preferences',
      'List Modification in every round as required',
    ],
  },
  {
    name: 'Plan B : Premium Counselling - Govt./ Private MBBS',
    price: 8500,
    benefits: [
      'All features of Personalised Plan',
      'Communication via Google Meet',
      'Extensive and elaborate support',
      'All features of Personalised Plan',
      'Communication via Google Meet',
      'Extensive and elaborate support',
    ],
  },
  {
    name: 'Plan C : Karnataka / kerala + Govt. MBBS',
    price: 8500,
    benefits: [
      'All features of Personalised Plan',
      'Communication via Google Meet',
      'Extensive and elaborate support',
      'All features of Personalised Plan',
      'Communication via Google Meet',
      'Extensive and elaborate support',
    ],
  },
  {
    name: 'Plan D : Multiple Counselling',
    price: 20000,
    benefits: [
      'Security money management',
      'Strategic planning to handle multiple counselling together.',
      'Custom pricing starting from Rs 20000/-',
      'Security money management',
      'Strategic planning to handle multiple counselling together.',
      'Custom pricing starting from Rs 20000/-',
    ],
  }
]

const miniSection = [
  {
    name: 'Freedom Plan',
    price: 21000,
    benefits: [
      'Premium / Offline Counselling for Govt / Pvt MBBS',
      'Form Filling / Counselling Registrations / Choice filling included',
      'Premium / Offline Counselling for Govt / Pvt MBBS',
      'Form Filling / Counselling Registrations / Choice filling included',
    ],
  },
]


const features = [
  {
    title: 'Premium Data',
    description: 'Check the most useful analysis of previous year data.',
    image: images.analytics,
  },
  {
    title: 'Candidate Profile',
    description: 'Check the most useful analysis of previous year data.',
    image: images.candidateProfile,
  },
  {
    title: 'College Prediction',
    description: 'The only custom data analysis tool with most useful features.',
    image: images.collegePrediction,
  },
  {
    title: 'College List',
    description: 'Check the most useful analysis of previous year data.',
    image: images.listinpersionalized,
  },
  {
    title: 'Phone - O - Senior',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: images.phoneosenior,
  },
  {
    title: 'Check Your List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    image: icons.checkyourlist,
  }
];

const exams = [
  'NEET - UG',
  'NEET - PG',
  'CUET/UG',
  'JEE',
  'USMLE',
  'PLAB',
  'IELTS / TOPL / GRE / GMAT',
];

const files = [
  {
    id: '1',
    name: 'New Data-2023',
    type: 'folder',
    count: '14 files - Free',
    children: [
      { id: '1-1', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-2', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-3', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-4', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-5', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-6', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-7', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-8', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-9', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-10', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-11', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-12', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-13', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-14', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' }
    ]
  },
  {
    id: '2',
    name: 'Sample Invoice',
    type: 'pdf',
    locked: false,
    url: 'https://drive.google.com/uc?export=download&id=1hpg3LkwXzL0iLa84GSsLEiV_IrvQvnHc',
  },
  {
    id: '3',
    name: 'New Data-2023',
    type: 'folder',
    count: '14 files - Free',
    children: [
      { id: '3-1', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-2', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-3', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-4', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-5', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-6', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-7', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-8', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-9', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-10', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-11', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-12', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-13', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-14', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' }
    ]
  },
  {
    id: '4',
    name: 'Sample Invoice',
    type: 'pdf',
    locked: true,
    url: 'https://drive.google.com/drive/folders/1Tr__c12uVn4Wu5C3dVv4zb33KCurWr74'
  },
  {
    id: '5',
    name: 'New Data-2023',
    type: 'folder',
    count: '14 files - Free',
    children: [
      { id: '5-1', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-2', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-3', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-4', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-5', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-6', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-7', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-8', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-9', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-10', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-11', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-12', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-13', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-14', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' }
    ]
  },
  {
    id: '6',
    name: 'New Data-2023',
    type: 'folder',
    count: '14 files - Free',
    children: [
      { id: '1-1', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-2', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-3', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-4', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-5', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-6', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-7', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-8', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-9', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-10', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-11', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-12', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-13', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '1-14', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' }
    ]
  },
  {
    id: '7',
    name: 'Sample Invoice',
    type: 'pdf',
    locked: false,
    url: 'https://drive.google.com/uc?export=download&id=1hpg3LkwXzL0iLa84GSsLEiV_IrvQvnHc',
  }
  ,
  {
    id: '8',
    name: 'New Data-2023',
    type: 'folder',
    count: '14 files - Free',
    children: [
      { id: '3-1', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-2', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-3', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-4', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-5', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-6', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-7', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-8', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-9', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-10', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-11', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-12', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-13', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '3-14', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' }
    ]
  },
  {
    id: '9',
    name: 'Sample Invoice',
    type: 'pdf',
    locked: true,
    url: 'https://drive.google.com/drive/folders/1Tr__c12uVn4Wu5C3dVv4zb33KCurWr74'
  },
  {
    id: '10',
    name: 'New Data-2023',
    type: 'folder',
    count: '14 files - Free',
    children: [
      { id: '5-1', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-2', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-3', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-4', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-5', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-6', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-7', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-8', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-9', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-10', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-11', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-12', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-13', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' },
      { id: '5-14', name: 'Sample Invoice', type: 'pdf', locked: true, url: 'https://www.example.com/sample.pdf' }
    ]
  }
];


const candidateOptions = [
  { label: 'Candidate Profile', icon: icons.userprofile },
  { label: 'Bills', icon: icons.userbills },
  { label: 'About Us', icon: icons.userabout },
  { label: 'Feedback', icon: icons.userfeedback },
  { label: 'Help Request', icon: icons.userhelp },
  { label: 'Testimonials', icon: icons.usertestmonial },
  { label: 'Return Policy', icon: icons.userreturn },
  { label: 'App Tour', icon: icons.usermap },
];

const socialLinks = [
  { label: 'Whatsapp', icon: icons.whatsApp, url: 'https://wa.me/message/EP7HLAFZNAEAC1' },
  { label: 'YouTube', icon: icons.youtube, url: 'https://www.youtube.com/@SHOBHIT_VERMA' },
  { label: 'Instagram', icon: icons.instagram, url: 'https://www.instagram.com/yourusername/' },
  { label: 'Telegram', icon: icons.teligram, url: 'https://t.me/official_thembbsplanet' },
];


export { candidateData, plans, onlinePlans, miniSection, features, exams, files, candidateOptions, socialLinks }