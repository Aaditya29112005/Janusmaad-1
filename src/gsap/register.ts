import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { Observer } from 'gsap/Observer';
import { CustomEase } from 'gsap/CustomEase';

// Register all GSAP plugins once
gsap.registerPlugin(ScrollTrigger, Flip, Observer, CustomEase);

export { gsap, ScrollTrigger, Flip, Observer, CustomEase };
