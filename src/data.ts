import robot_1 from './assets/3d-metal.png';
import robot_2 from './assets/female-cyborg.png';
import robot_3 from './assets/3d-texture.png';
import robotAiHead from './assets/head-bg.png';
import robot_head_blue from './assets/robot-head-blue.png';
import robot_ai_3d from './assets/robot-ai-3d.png';
import head_stripe from './assets/head-stripe.png';

 interface Robot {
  name: string;
  description: string;
  robotImg: string;
  image: string;
}

export const topThreeRobots: Robot[] = [
  {
    name: 'Mighiniore',
    description:
      'Mighionre is a 2022 AI model which is made specifically for human intellectual aid, she has a wide variety of human interaction structure allowing her.......read more',
    robotImg: robot_1,
    image: ''
  },
  {
    name: 'Siren',
    description:
      'Meet Siren, She’s a 2022 AI model with a highly sophisticated AI model used for vocal manipulation',
    robotImg: robot_2,
    image: ''
  },
  {
    name: 'Zodd',
    description:
      'Zodd, is a 2022 AI model specially designed for the hospital usage, Zodd helps in sections like auto x-ray scanning and, test running humans for syntoms like cancers etc.',
    robotImg: robot_3,
    image: ''
  }
];

export interface Variation {
  name: string;
  image: string;
}

export const variations: Variation[] = [
  {name: 'splicer', image: robotAiHead},
  {name: 'zodd', image: topThreeRobots[2].robotImg},
  {name: 'xavier', image: robot_head_blue},
  {name: 'zodd', image: topThreeRobots[1].robotImg},
  {name: 'zodd', image: robot_ai_3d},
  {name: 'cerebro', image: head_stripe}
];
