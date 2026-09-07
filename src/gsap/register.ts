import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { Observer } from 'gsap/Observer';
import { CustomEase } from 'gsap/CustomEase';
import { Draggable } from 'gsap/Draggable';

// Register all GSAP plugins once
gsap.registerPlugin(ScrollTrigger, Flip, Observer, CustomEase, Draggable);

export { gsap, ScrollTrigger, Flip, Observer, CustomEase, Draggable };
