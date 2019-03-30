import "reset.scss";
import "index.scss";
let img = 'annualreport.png';
require('images/' + img);








var roundLogEl = document.querySelector('.year-number');
var roundLogEl2 = document.querySelector('.average-number');

anime({
    targets: roundLogEl,
    innerHTML: [0, 7.5],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});
anime({
    targets: roundLogEl2,
    innerHTML: [0, 204.4],
    easing: 'easeInOutExpo',
    round: 10 // Will round the animated value to 1 decimal
});

//年度總量
var bar = new ProgressBar.Line(container2016, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a6c3dd',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 7.2));
    }
});
var bar2 = new ProgressBar.Line(container2017, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a6c3dd',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 7.2));
    }
});
var bar3 = new ProgressBar.Line(container2018, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 7.2));
    }
});

//平均日運量
var bar4 = new ProgressBar.Line(secContainer2016, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 196));
    }
});
var bar5 = new ProgressBar.Line(secContainer2017, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 202));
    }
});
var bar6 = new ProgressBar.Line(secContainer2018, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3b91c0',
    trailColor: '#eee',
    trailWidth: 0, //1
    svgStyle: { width: '100%', height: '100%', borderRadius: '30px' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#fff',
            position: 'absolute',
            right: '6px',
            top: '0',
            fontSize: '16px',
            padding: 0,
            margin: 0,
            transform: null,
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 204));
    }
});

bar.animate(1.0);  // Number from 0.0 to 1.0
bar2.animate(1.0);  // Number from 0.0 to 1.0
bar3.animate(1.0);  // Number from 0.0 to 1.0
bar4.animate(1.0);  // Number from 0.0 to 1.0
bar5.animate(1.0);  // Number from 0.0 to 1.0
bar6.animate(1.0);  // Number from 0.0 to 1.0


















