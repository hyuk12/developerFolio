/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from 'react-easy-emoji'
import splashAnimation from './assets/lottie/splashAnimation' // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
}

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
}

const greeting = {
  username: 'hyuko',
  title: '안녕하세요, hyuko입니다',
  subTitle: emoji(
    'Java와 Spring Boot를 사용하여 신뢰할 수 있는 API와 미들웨어 솔루션을 개발하는 결과 지향적인 백엔드 개발자입니다. Redis, RabbitMQ, Docker와 같은 최신 도구를 통합하여 산업 자동화 및 AIoT 응용 프로그램에서 혁신을 이끄는 고성능 시스템을 구축하는 데 주력하고 있습니다.'
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
}

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/hyuk12',
  gmail: 'gogur7419@gmail.com',
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
}

// Skills Section

const skillsSection = {
  title: '제가 하는 일',
  subTitle: '확장 가능하고 효율적인 시스템을 구축하는 헌신적인 백엔드 개발자',
  skills: [
    emoji('⚡ 시스템 통합을 위한 RESTful API 및 미들웨어 솔루션 설계 및 개발'),
    emoji('⚡ Java와 Spring Boot를 사용하여 고성능, 확장 가능한 백엔드 구현'),
    emoji('⚡ 실시간 통신을 위한 RabbitMQ 및 MQTT와 같은 메시지 브로커 통합'),
    emoji(
      '⚡ Docker 및 Kubernetes를 사용하여 컨테이너화된 애플리케이션 배포 및 관리'
    ),
    emoji('⚡ PostgreSQL 및 Redis를 사용한 효율적인 데이터 관리')
  ],

  softwareSkills: [
    {
      skillName: 'java',
      fontAwesomeClassname: 'fab fa-java'
    },
    {
      skillName: 'spring-boot',
      fontAwesomeClassname: 'fas fa-leaf' // Spring Boot 아이콘으로 교체
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker'
    },
    {
      skillName: 'kubernetes',
      fontAwesomeClassname: 'fas fa-cloud' // Kubernetes 아이콘
    },
    {
      skillName: 'postgresql',
      fontAwesomeClassname: 'fas fa-database'
    },
    {
      skillName: 'redis',
      fontAwesomeClassname: 'fas fa-memory' // Redis 아이콘
    },
    {
      skillName: 'rabbitmq',
      fontAwesomeClassname: 'fas fa-envelope' // RabbitMQ 아이콘
    },
    {
      skillName: 'mqtt',
      fontAwesomeClassname: 'fas fa-broadcast-tower' // MQTT 아이콘
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'fab fa-git'
    },
    {
      skillName: 'nginx',
      fontAwesomeClassname: 'fas fa-server'
    },
    {
      skillName: 'linux',
      fontAwesomeClassname: 'fab fa-linux'
    }
  ],
  display: true // false로 설정하면 이 섹션 숨김
}

// Education Section

const educationInfo = {
  display: true, // false로 설정하면 이 섹션 숨김
  schools: [
    {
      schoolName: '학점은행제 컴퓨터공학과',
      logo: require('./assets/images/educationLogo.png'), // 로고 추가 가능
      subHeader: '컴퓨터공학 학사',
      duration: '2022년 11월 - 2023년 11월',
      desc: '컴퓨터공학 과정을 통해 백엔드 개발에 필요한 이론과 실무를 학습했습니다.',
      descBullets: [
        '데이터베이스, 네트워크, 소프트웨어 공학의 기본 지식 습득',
        '졸업 프로젝트로 백엔드 시스템 설계 및 구현 경험',
        '학점은행제를 통해 컴퓨터공학 학위 취득'
      ]
    },
    {
      schoolName: '한국호텔관광전문학교',
      logo: require('./assets/images/koreaHotelLogo.png'),
      subHeader: '호텔 제과제빵학과 준학사',
      duration: '2012년 3월 - 2016년 2월',
      desc: '호텔 제과제빵학과 졸업, 제과제빵 분야에서 기초 지식을 습득했습니다.',
      descBullets: [
        '제과제빵 이론과 실습을 통해 기본 기술 습득',
        '호텔 및 외식 산업에서의 제과제빵 실무 경험'
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // true로 설정하면 숙련도 섹션 표시
  experience: [
    {
      Stack: '백엔드 개발', // 주요 기술 강조
      progressPercentage: '85%'
    },
    {
      Stack: '데이터베이스 관리', // 데이터베이스 관리 기술 추가
      progressPercentage: '80%'
    },
    {
      Stack: 'DevOps/배포', // Docker, Kubernetes 등 DevOps 경험 강조
      progressPercentage: '75%'
    }
  ],
  displayCodersrank: false // Codersrank 배지 섹션 비활성화
}

// Work experience section

const workExperiences = {
  display: true, // true로 설정하면 업무 경험 섹션 표시
  experience: [
    {
      role: '백엔드 개발자',
      company: 'Musma',
      companylogo: require('./assets/images/musmaLogo.png'), // 로고 추가
      date: '2023년 7월 – 현재',
      desc: 'AIoT 프로젝트를 위한 미들웨어 개발 및 데이터 처리 솔루션 구축에 참여했습니다.',
      descBullets: [
        'Spring Boot와 RabbitMQ를 활용한 데이터 파이프라인 설계 및 구현',
        'MQTT/TCP 프로토콜을 활용한 실시간 데이터 처리',
        'Kubernetes 및 Docker를 사용한 배포 및 CI/CD 파이프라인 자동화',
        'PLC 및 현장 장치 데이터 시각화를 위한 RESTful API 개발'
      ]
    },
    {
      role: '호텔 제빵사',
      company: '한국호텔관광전문학교',
      companylogo: require('./assets/images/koreaHotelLogo.png'),
      date: '2012년 3월 – 2016년 2월',
      desc: '호텔 제과제빵학과 졸업 후 제과제빵 분야에서의 기초 실습 및 현장 경험.',
      descBullets: [
        '호텔 및 외식 산업에서의 제과제빵 실무 경험',
        '팀 프로젝트로 대규모 케이터링 작업 수행'
      ]
    }
  ]
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
}

// Some big projects you have worked on

const bigProjects = {
  title: '주요 프로젝트',
  subtitle: '백엔드 개발 기술을 보여주는 프로젝트',
  projects: [
    {
      image: require('./assets/images/projectPlaceholder.png'), // 플레이스홀더 이미지
      projectName: '크레인 충돌 방지 시스템',
      projectDesc:
        'Spring Boot, Redis, RabbitMQ를 사용하여 실시간 충돌 감지 및 방지 미들웨어 시스템 개발.',
      footerLink: []
    },
    {
      image: require('./assets/images/projectPlaceholder.png'), // 플레이스홀더 이미지
      projectName: '원격 인버터 제어 시스템',
      projectDesc:
        'MQTT 및 TCP/UDP 프로토콜을 사용하여 원격 인버터 제어 시스템 구축, 안전하고 효율적인 장치 통신 보장.',
      footerLink: []
    },
    {
      image: require('./assets/images/projectPlaceholder.png'), // 플레이스홀더 이미지
      projectName: '예열 패널 제어 시스템',
      projectDesc:
        'PostgreSQL을 통합하여 패널 예열 프로세스를 관리 및 모니터링하는 API 설계 및 구현.',
      footerLink: []
    }
  ],
  display: true // true로 설정하면 이 섹션 표시
}

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('성과 및 인증 🏆 '),
  subtitle: '현재 의미 있는 프로젝트를 구축하고 인증을 취득 중입니다.',
  achievementsCards: [],
  display: false // 해당 섹션 숨김
}

// Blogs Section

const blogSection = {
  title: '블로그',
  subtitle: '백엔드 개발, 시스템 아키텍처 및 DevOps에 대한 여정과 통찰 공유.',

  displayMediumBlogs: false, // Medium 블로그 대신 직접 블로그 사용
  blogs: [
    {
      url: 'https://hyuko12.tistory.com/category/Springboot', // 실제 블로그 URL
      title: 'Spring Boot를 사용한 확장 가능한 백엔드 구축',
      description:
        'Java, Spring Boot, Redis 및 RabbitMQ와 같은 최신 도구를 사용하여 확장 가능한 백엔드 시스템을 설계하고 구현하는 방법에 대한 종합 가이드.'
    },
    {
      url: 'https://hyuko12.tistory.com/category/Docker',
      title: 'Docker와 Kubernetes 소개',
      description:
        'Docker를 사용한 컨테이너화 및 Kubernetes 클러스터에서 애플리케이션 배포에 대한 쉬운 튜토리얼.'
    }
  ],
  display: true // true로 설정하면 이 섹션 표시
}

// Talks Sections

const talkSection = {
  title: '발표',
  subtitle: emoji('미래 이벤트에서 지식을 공유할 준비가 되어 있습니다!'),
  talks: [],
  display: false // 섹션 숨김
}

// Podcast Section

const podcastSection = {
  title: emoji('팟캐스트 🎙️'),
  subtitle: '나와 기술에 대해 이야기하는 것을 좋아합니다.',

  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo'
  ],
  display: false // 해당 섹션 숨김
}

// Resume Section
// 이력서 섹션
const resumeSection = {
  title: '이력서',
  subtitle: '이력서를 다운로드하세요.',

  display: true // true로 설정하면 이 섹션 표시
}

// 연락처 정보 섹션
const contactInfo = {
  title: emoji('연락하기 ☎️'),
  subtitle:
    '프로젝트 논의 또는 간단히 인사하고 싶으신가요? 언제든지 연락주세요!',
  number: '+82-10-3922-3637',
  email_address: 'gogur7419@gmail.com'
}

// Twitter 섹션

const twitterDetails = {
  userName: 'twitter', // Twitter 사용자 이름(@ 제외)
  display: true // true로 설정하면 이 섹션 표시
}

const isHireable = true // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
}
