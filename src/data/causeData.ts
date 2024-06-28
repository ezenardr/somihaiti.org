import { StaticImageData } from "next/image";

import causeThumb_1 from "@/assets/img/causes/cause1.jpg";
import causeThumb_2 from "@/assets/img/causes/cause2.jpg";
import causeThumb_3 from "@/assets/img/causes/cause3.jpg";

import cause2Thumb_1 from "@/assets/img/causes/cause-two1.jpg";
import cause2Thumb_2 from "@/assets/img/causes/cause-two2.jpg";
import cause2Thumb_3 from "@/assets/img/causes/cause-two3.jpg";
import cause2Thumb_4 from "@/assets/img/causes/cause-two4.jpg";
import cause2Thumb_5 from "@/assets/img/causes/cause-two5.jpg";
import cause2Thumb_6 from "@/assets/img/causes/cause-two6.jpg";
import cause2Thumb_7 from "@/assets/img/causes/cause-two7.jpg";
import cause2Thumb_8 from "@/assets/img/causes/cause-two8.jpg";
import cause2Thumb_9 from "@/assets/img/causes/cause-two9.jpg";

import cause3Thumb_1 from "@/assets/img/causes/cause-three1.jpg";
import cause3Thumb_2 from "@/assets/img/causes/cause-three2.jpg";
import cause3Thumb_3 from "@/assets/img/causes/cause-three3.jpg";

import recentCauseThumb_1 from "@/assets/img/widgets/cause1.jpg";
import recentCauseThumb_2 from "@/assets/img/widgets/cause2.jpg";
import recentCauseThumb_3 from "@/assets/img/widgets/cause3.jpg";

interface DataType {
   id: number;
   page:string;
   img: StaticImageData;
   title: string;
   desc?: string;
   raised: number;
   goal: number;
   progress_width?: string | number;
   progress_bg?: string;
   btn_bg?: string;
   price_color?:string;
   item_bg?:string;
   percentage?:number;
}

const cause_data: DataType[] = [
   {
      id: 1,
      page:"home_1",
      img: causeThumb_1,
      title: "Water For All Children",
      desc: "You believe, as we do, that every child deserves a future. Every last child.",
      raised: 87689,
      goal: 87689,
      progress_width: "75%",
   },
   {
      id: 2,
      page:"home_1",
      img: causeThumb_2,
      title: "Protecting Children",
      desc: "You believe, as we do, that every child deserves a future. Every last child.",
      raised: 89679,
      goal: 89286,
      progress_width: "60%",
      progress_bg: "progress-bar--yellow",
      btn_bg: "btn--yellow"
   },
   {
      id: 3,
      page:"home_1",
      img: causeThumb_3,
      title: "The Rights of Children",
      desc: "You believe, as we do, that every child deserves a future. Every last child.",
      raised: 97679,
      goal: 97679,
      progress_width: "70%",
      progress_bg: "progress-bar--green",
      btn_bg: "btn--green"
   },
   {
      id: 4,
      page:"home_1",
      img: causeThumb_1,
      title: "Water For All Children",
      desc: "You believe, as we do, that every child deserves a future. Every last child.",
      raised: 87689,
      goal: 87689,
      progress_width: "75%",
   },

   // Inner Page
  
   {
      id: 1,
      page:"inner_page",
      img: cause2Thumb_1,
      title: "Water For All Children",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 100587,
      goal: 200587,
      percentage: 90,
      progress_bg:"one",
   },
   {
      id: 2,
      page:"inner_page",
      img: cause2Thumb_2,
      title: "Clean Education Help",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 95752,
      goal: 100752,
      percentage: 85,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 3,
      page:"inner_page",
      img: cause2Thumb_3,
      title: "The Right of Childen",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 97152,
      goal: 200752,
      percentage: 55,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },
   {
      id: 4,
      page:"inner_page",
      img: cause2Thumb_4,
      title: "Action Against Poverty",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 784689,
      goal: 1547689,
      percentage: 90,
      progress_bg:"one",
   },
   {
      id: 5,
      page:"inner_page",
      img: cause2Thumb_5,
      title: "Help The Ecosystems",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 60000,
      goal: 100752,
      percentage: 85,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 6,
      page:"inner_page",
      img: cause2Thumb_6,
      title: "Winter Survival Pack",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 50650,
      goal: 3578358,
      percentage: 55,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },
   {
      id: 7,
      page:"inner_page",
      img: cause2Thumb_7,
      title: "Water For All Children",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 120245,
      goal: 247874,
      percentage: 90,
      progress_bg:"one",
   },
   {
      id: 8,
      page:"inner_page",
      img: cause2Thumb_8,
      title: "Childhood Development",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 547245,
      goal: 721578,
      percentage: 85,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 9,
      page:"inner_page",
      img: cause2Thumb_9,
      title: "Much Needed Help",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 357250,
      goal: 478147,
      percentage: 55,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },
   {
      id: 10,
      page:"inner_page",
      img: cause2Thumb_7,
      title: "Water For All Children",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 120245,
      goal: 247874,
      percentage: 90,
      progress_bg:"one",
   },
   {
      id: 11,
      page:"inner_page",
      img: cause2Thumb_8,
      title: "Childhood Development",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 547245,
      goal: 721578,
      percentage: 85,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 12,
      page:"inner_page",
      img: cause2Thumb_9,
      title: "Much Needed Help",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 357250,
      goal: 478147,
      percentage: 55,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },
   {
      id: 13,
      page:"inner_page",
      img: cause2Thumb_4,
      title: "Action Against Poverty",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 784689,
      goal: 1547689,
      percentage: 90,
      progress_bg:"one",
   },
   {
      id: 14,
      page:"inner_page",
      img: cause2Thumb_5,
      title: "Help The Ecosystems",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 60000,
      goal: 100752,
      percentage: 85,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 15,
      page:"inner_page",
      img: cause2Thumb_6,
      title: "Winter Survival Pack",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 50650,
      goal: 3578358,
      percentage: 55,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },
   {
      id: 16,
      page:"inner_page",
      img: cause2Thumb_1,
      title: "Water For All Children",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 100587,
      goal: 200587,
      percentage: 90,
      progress_bg:"one",
   },
   {
      id: 17,
      page:"inner_page",
      img: cause2Thumb_2,
      title: "Clean Education Help",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 95752,
      goal: 100752,
      percentage: 85,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 18,
      page:"inner_page",
      img: cause2Thumb_3,
      title: "The Right of Childen",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 97152,
      goal: 200752,
      percentage: 55,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },
   {
      id: 19,
      page:"inner_page",
      img: cause2Thumb_1,
      title: "Water For All Children",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 100587,
      goal: 200587,
      percentage: 90,
      progress_bg:"one",
   },
   {
      id: 20,
      page:"inner_page",
      img: cause2Thumb_2,
      title: "Clean Education Help",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 95752,
      goal: 100752,
      percentage: 85,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 21,
      page:"inner_page",
      img: cause2Thumb_3,
      title: "The Right of Childen",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 97152,
      goal: 200752,
      percentage: 55,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },
   {
      id: 22,
      page:"inner_page",
      img: cause2Thumb_4,
      title: "Action Against Poverty",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 784689,
      goal: 1547689,
      percentage: 90,
      progress_bg:"one",
   },
   {
      id: 23,
      page:"inner_page",
      img: cause2Thumb_5,
      title: "Help The Ecosystems",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 60000,
      goal: 100752,
      percentage: 85,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 24,
      page:"inner_page",
      img: cause2Thumb_6,
      title: "Winter Survival Pack",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 50650,
      goal: 3578358,
      percentage: 55,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },
   {
      id: 25,
      page:"inner_page",
      img: cause2Thumb_7,
      title: "Water For All Children",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 120245,
      goal: 247874,
      percentage: 90,
      progress_bg:"one",
   },
   {
      id: 26,
      page:"inner_page",
      img: cause2Thumb_8,
      title: "Childhood Development",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 547245,
      goal: 721578,
      percentage: 85,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 27,
      page:"inner_page",
      img: cause2Thumb_9,
      title: "Much Needed Help",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 357250,
      goal: 478147,
      percentage: 55,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },
   {
      id: 28,
      page:"inner_page",
      img: cause2Thumb_7,
      title: "Water For All Children",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 120245,
      goal: 247874,
      percentage: 90,
      progress_bg:"one",
   },
   {
      id: 29,
      page:"inner_page",
      img: cause2Thumb_8,
      title: "Childhood Development",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 547245,
      goal: 721578,
      percentage: 85,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 30,
      page:"inner_page",
      img: cause2Thumb_9,
      title: "Much Needed Help",
      desc: "There are many variations of passages of orem Ipsum available, but the majority have",
      raised: 357250,
      goal: 478147,
      percentage: 55,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },

   // recent cause

   
   {
      id: 1,
      page:"inner_page_details",
      img: recentCauseThumb_1,
      title: "Clothes For Everyone",
      raised: 23785,
      goal: 87563,
   }, 
   {
      id: 2,
      page:"inner_page_details",
      img: recentCauseThumb_2,
      title: "New Kindergarten",
      raised: 17568,
      goal: 20898,
   }, 
   {
      id: 3,
      page:"inner_page_details",
      img: recentCauseThumb_3,
      title: "Food for childen",
      raised: 30635,
      goal: 50658,
   },
]

export default cause_data;