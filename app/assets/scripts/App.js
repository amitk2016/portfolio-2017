import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import Accordian from './modules/Accordian';

var mobileMenu = new MobileMenu();

new RevealOnScroll( $('.work_image'), "65%" ,"reveal-item" );
new RevealOnScroll( $('.testimonial'), "75%" ,"reveal-item-2");
var stickyHeader = new StickyHeader();

var modal = new Modal();

var accordian = new Accordian();